import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import { ProfilePage } from '@components/MyProfile/MyProfile';
import MyProfileTabs from '@components/MyProfileTabs/MyProfileTabs';

const MyProfilePage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="My Profile" />
            <MyProfileTabs activeTab="MyProfile"></MyProfileTabs>
            <ProfilePage></ProfilePage>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default MyProfilePage;
