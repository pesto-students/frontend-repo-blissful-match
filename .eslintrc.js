module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
    ],
    parserOptions: {
        ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        // Custom ESLint rules can be added here
        'react/prop-types': 'off', // Disables prop-types as we use TypeScript for type checking
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Disables the need to explicitly define return types
        '@typescript-eslint/no-explicit-any': 'warn', // Warns when using 'any' type
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'react/no-unescaped-entities': 0,
    },
    ignorePatterns: ['node_modules/', 'build/', 'dist/'], // Folders to be ignored by ESLint
};
