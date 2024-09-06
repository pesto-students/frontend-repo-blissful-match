import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import frame from '../assets/images/Frame.png';
import aboutus from '../assets/images/about-us.png';
import journey from '../assets/images/journey.png';
import frame2 from '../assets/images/Frame2.png';
import founder1 from '../assets/images/founder1.png';
import founder2 from '../assets/images/founder2.png';
import founder3 from '../assets/images/founder3.png';

const AboutPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="About Us" />
            <div>
                <div className="flex overflow-hidden flex-col items-center pb-6 bg-white">
                    <div className="head-title self-stretch px-6 py-6 w-full text-2xl font-bold text-center text-black bg-sky-200 shadow-lg max-md:px-2 max-md:max-w-full">
                        ABOUT BLISSFULMATCH.com
                    </div>
                    <div className="flex flex-col items-center mt-8 ml-2 max-w-full text-3xl font-semibold text-black min-h-[120px] w-[800px] max-md:mt-4 max-md:text-2xl">
                        <div className="max-md:max-w-full max-md:text-2xl whitespace-nowrap overflow-x-auto text-ellipsis">
                            From Classroom Project to Real-World Platform: The
                            Blissful Match Story
                        </div>
                        <img
                            loading="lazy"
                            src={frame}
                            className="object-contain mt-2 max-w-full aspect-[7.09] w-[200px]"
                        />
                    </div>
                    <div className="visions  mt-6 ml-4 w-full max-w-[1200px] max-md:mt-4 max-md:max-w-full">
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full abt-description">
                                <div className="flex flex-col mt-20 max-md:mt-4 max-md:max-w-full abt-d">
                                    <div className="flex relative gap-2 items-start self-start text-3xl font-semibold text-black max-md:text-2xl">
                                        {/* <div className="flex absolute z-0 shrink-0 bg-orange-400 bottom-[20px] h-[2px] min-w-[150px] right-[-10px] w-[200px]" /> */}
                                        <div className="z-0 max-md:text-2xl">
                                            ABOUT US
                                            <br />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-lg text-neutral-600 max-md:max-w-full">
                                        Blissful Match began as a humble project
                                        by a group of passionate students from
                                        Pesto, united by the vision of creating
                                        a platform that fosters meaningful
                                        connections. What started as an academic
                                        exercise has now blossomed into a
                                        real-world platform, bringing people
                                        together in ways we had only dreamed of.
                                        <br />
                                        <br />
                                        Our mission is to facilitate authentic
                                        relationships by providing a space where
                                        individuals can connect based on shared
                                        interests, values, and goals. We believe
                                        in the power of human connections to
                                        enrich lives and build communities, and
                                        we are dedicated to continuously
                                        improving our platform to make this
                                        process as seamless and enjoyable as
                                        possible.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2 w-6/12 max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    src={journey}
                                    className="object-contain grow w-full aspect-[1.05] bdr-box max-md:mt-4 max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="abt-d pb-20 mt-4 w-full max-w-[1200px] max-md:max-w-full">
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex relative flex-col grow items-end px-8 pt-20 pb-4 min-h-[500px]  max-md:pt-12 max-md:pl-2 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={aboutus}
                                        className="bdr-box object-cover absolute inset-0 size-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-2 w-6/12 max-md:ml-0 max-md:w-full abt-description1">
                                <div className="flex flex-col mt-4 max-md:mt-2">
                                    <div className="text-3xl font-semibold text-black max-md:text-2xl">
                                        OUR MISSION
                                    </div>
                                    <div className="mt-4 text-lg text-neutral-600 max-md:text-base max-md:mt-2 max-md:max-w-full">
                                        At Blissful Match, we are committed to
                                        creating a platform that values
                                        authenticity and encourages meaningful
                                        relationships. We strive to offer an
                                        intuitive and enjoyable user experience,
                                        while also maintaining the highest
                                        standards of privacy and security. Our
                                        mission is to empower our users to forge
                                        genuine connections that can lead to
                                        lasting partnerships.
                                    </div>
                                </div>
                                <div className="flex flex-col mt-8 max-md:mt-4 max-md:max-w-full">
                                    <div className="text-3xl font-semibold text-black max-md:text-2xl">
                                        OUR VALUES
                                    </div>
                                    <div className="mt-4 text-lg text-neutral-600 max-md:text-base max-md:mt-2 max-md:max-w-full">
                                        We believe in the importance of trust,
                                        respect, and transparency in all
                                        relationships. These values guide our
                                        interactions with our users, as well as
                                        our approach to developing and improving
                                        our platform. We are dedicated to
                                        fostering a community where individuals
                                        can connect based on shared values and
                                        interests, leading to deeper and more
                                        fulfilling relationships.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" team flex flex-col justify-center items-center self-stretch px-10 py-10 mt-24 w-full bg-sky-200 max-md:px-4 max-md:mt-8 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col px-8 pb-20 w-full bg-sky-200 max-w-[1200px] max-md:px-4 max-md:pb-16 max-md:max-w-full">
                        <div className="flex flex-col items-center self-center ml-2 max-w-full text-4xl font-semibold text-center text-black whitespace-nowrap min-h-[100px] w-[300px] max-md:text-2xl">
                            <div className="max-md:max-w-full max-md:text-2xl">
                                Co-Founders
                            </div>
                            <img
                                loading="lazy"
                                src={frame2}
                                className="object-contain mt-2 max-w-full aspect-[7.09] w-[200px]"
                            />
                        </div>
                        <div className="mt-10 mb-0 w-full max-md:mt-8 max-md:mb-2 max-md:max-w-full">
                            <div className="flex gap-4 max-md:flex-col">
                                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src={founder1}
                                        className="object-contain shrink-0 max-w-full aspect-[0.63] w-[250px] max-md:mt-8"
                                    />
                                </div>
                                <div className="flex flex-col ml-2 w-9/12 max-md:ml-0 max-md:w-full">
                                    <div className="grow max-md:mt-8 max-md:max-w-full">
                                        <div className="flex gap-4 max-md:flex-col">
                                            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                                                <img
                                                    loading="lazy"
                                                    src={founder2}
                                                    className="object-contain grow mt-10 w-full aspect-[0.9] max-md:mt-8 max-md:max-w-full"
                                                />
                                            </div>
                                            <div className="flex flex-col ml-2 w-[34%] max-md:ml-0 max-md:w-full">
                                                <img
                                                    loading="lazy"
                                                    src={founder3}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default AboutPage;
