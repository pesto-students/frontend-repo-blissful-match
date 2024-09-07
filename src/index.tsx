import './styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import configureAppStore, { getPreloadedState } from './store/configureStore';
import AppContextProvider from './contexts/AppContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Auth/LoginPage';
// import Login from './pages/Login/LoginPage';
import Home from './pages/Home/HomePage';
import About from './pages/AboutPage';
import MembersList from './pages/Members/MembersList';
import { Packages } from './pages/packages';
import MyViewHistory from './pages/MyViewHistory/MyViewHistory';
import LikedProfiles from './pages/LikedProfiles/LikedProfiles';
import MemberProfilePage from './pages/MemberProfilePage';
import Contact from './pages/ContactPage';
import ForgetPassword from './pages/Auth/ForgetPasswordPage';
import ForgetPasswordOtp from './pages/Auth/ForgetPasswordOtpPage';
import ResetPassword from './pages/Auth/ResetPasswordPage';
import ChangePassword from './pages/Auth/ChangePasswordPage';
import Register from './pages/Auth/RegisterPage';
import MyProfilePage from './pages/MyProfile';
import { ToDoList } from '@components/ToDo/ToDoList';
import LoaderComponent from '@components/LoaderComponent/LoaderComponent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/todo',
        element: <ToDoList />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/members',
        element: <MembersList />,
    },
    {
        path: '/my-view-history',
        element: <MyViewHistory />,
    },
    {
        path: '/packages',
        element: <Packages />,
    },
    {
        path: '/member-profile/:id',
        element: <MemberProfilePage />,
    },
    {
        path: '/my-profile',
        element: <MyProfilePage />,
    },
    {
        path: '/liked-profiles',
        element: <LikedProfiles />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />,
    },
    {
        path: '/forget-password-otp',
        element: <ForgetPasswordOtp />,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/change-password',
        element: <ChangePassword />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

(async () => {
    const preloadedState = getPreloadedState();
    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <RouterProvider router={router} />
                    <LoaderComponent></LoaderComponent>
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();
