import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Home from '@components/Home/Home';
import Footer from '@components/Footer/Footer';

const HomePage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default HomePage;
