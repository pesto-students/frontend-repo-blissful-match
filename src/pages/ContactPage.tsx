import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Contact from '@components/Contact/Contact';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const ContactPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Contact Us" />
            <div className="self-stretch px-6 py-6 w-full text-2xl font-bold text-center text-black bg-sky-200 shadow-lg max-md:px-2 max-md:max-w-full">
                Reach out to us
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default ContactPage;
