import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import { ProfilePage } from '@components/MyProfile/MyProfile';

const MyProfilePage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="My Profile" />
            <ProfilePage></ProfilePage>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default MyProfilePage;
