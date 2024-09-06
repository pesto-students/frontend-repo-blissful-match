import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

export default (env, options) => {
    const devMode = options.mode === 'development' ? true : false;

    process.env.NODE_ENV = options.mode;
    console.log(__dirname);
    const dotenvPath = _resolve(
        __dirname,
        `.env.${env.NODE_ENV || 'development'}`
    );
    return {
        mode: options.mode,
        entry: _resolve(__dirname, './src/index.tsx'),
        output: {
            path: _resolve(__dirname, './dist'),
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/',
        },
        devServer: {
            historyApiFallback: true,
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            alias: {
                '@components': _resolve(__dirname, 'src/components/'),
                '@constants': _resolve(__dirname, 'src/constants/'),
                '@hooks': _resolve(__dirname, 'src/hooks/'),
                '@services': _resolve(__dirname, 'src/services/'),
                '@store': _resolve(__dirname, 'src/store/'),
                '@styles': _resolve(__dirname, 'src/styles/'),
                '@utils': _resolve(__dirname, 'src/utils/'),
                '@assets': _resolve(__dirname, 'src/assets/'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/i,
                    // include: path.resolve(__dirname, 'src'),
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                    },
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                    },
                },
            ],
        },
        plugins: [
            // need to use ForkTsCheckerWebpackPlugin because Babel loader ignores the compilation errors for Typescript
            new ForkTsCheckerWebpackPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].css' : '[name].[contenthash].css',
                chunkFilename: devMode
                    ? '[name].css'
                    : '[name].[contenthash].css',
            }),
            // copy static files from public folder to build directory
            new CopyPlugin({
                patterns: [
                    {
                        from: 'public/**/*',
                        globOptions: {
                            ignore: ['**/index.html'],
                        },
                    },
                ],
            }),
            new Dotenv({
                path: dotenvPath,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
                title: process.env.REACT_APP_NAME,
                meta: {
                    title: process.env.REACT_APP_NAME as string,
                    description: process.env.REACT_APP_DESCRIPTION as string,
                    author: process.env.REACT_APP_AUTHOR as string,
                    keywords: Array.isArray(process.env.REACT_APP_KEYWORDS)
                        ? (process.env.REACT_APP_KEYWORDS.join(',') as string)
                        : false,
                    'og:title': process.env.REACT_APP_NAME as string,
                    'og:description': process.env
                        .REACT_APP_DESCRIPTION as string,
                    'og:url': process.env.REACT_APP_HOMEPAGE as string,
                },
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: false,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
            }),
            // !devMode ? new CleanWebpackPlugin() : false,
            // !devMode ? new BundleAnalyzerPlugin() : false
        ].filter(Boolean),
        optimization: {
            // splitChunks: {
            //     cacheGroups: {
            //         // vendor chunk
            //         vendor: {
            //             // sync + async chunks
            //             chunks: 'all',
            //             name: 'vendor',
            //             // import file path containing node_modules
            //             test: /node_modules/
            //         }
            //     }
            // },
            minimizer: [
                new TerserPlugin({
                    extractComments: true,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ],
        },
    };
};
