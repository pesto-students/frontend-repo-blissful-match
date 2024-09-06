import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import MemberProfile from '@components/MemberProfile/MemberProfile';

const MemberProfilePage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Member Profile" />
            <MemberProfile></MemberProfile>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default MemberProfilePage;
