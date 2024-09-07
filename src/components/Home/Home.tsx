/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import homePageImage from '@assets/images/Rectangle 1.png';
import connect from '@assets/images/connect.png';
import signup from '@assets/images/signup.png';
import interact from '@assets/images/interact.png';
import ellipse from '@assets/images/ellipse.png';
import couple from '@assets/images/Home-Couple-Optimized 1.png';
import ellipse2 from '@assets/images/ellipse2.png';
import leftArrow from '@assets/images/left-arrow.png';
import rightArrow from '@assets/images/right-arrow.png';
import img1 from '@assets/images/img1.png';
import img2 from '@assets/images/img2.png';
import playStore from '@assets/images/Google-Play-Store.png';
import appStore from '@assets/images/app-store.png';
import bmLogo from '@assets/images/bm-logo.png';
import bestmatches from '@assets/images/Best Matches.png';
import verifiedprofile from '@assets/images/Verified Profile.png';
import { RELIGION } from '@constants/RELIGION';
import privacy from '@assets/images/privacy.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        lookingFor: 'Female',
        ageFrom: 18,
        ageTo: 25,
        religion: '',
        location: '',
    });

    const letsBegin = () => {
        localStorage.setItem('search', JSON.stringify(formData));
        navigate('/members');
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="flex overflow-hidden flex-col pt-5 bg-white ">
            <div className="flex flex-col mt-3.5 w-full bg-white">
                <div className="box-main relative flex flex-col items-start px-16 pt-72 pb-3.5 w-full min-h-[900px] max-md:px-5 max-md:pt-24 max-md:pb-6">
                    <img
                        loading="lazy"
                        src={homePageImage}
                        className="object-cover absolute inset-0 w-full h-full"
                        alt="Background"
                    />
                    <div className="relative z-10">
                        <div className="relative main-title px-8 pt-8 font-medium text-sky-200 text-7xl max-md:text-4xl max-md:px-4 max-md:pt-4 -mt-[110px] max-md:-mt-4">
                            <h1 className="pb-6 text-center max-md:text-3xl txt-shadow">
                                Find Your Perfect Match
                            </h1>
                            <span className="text-orange-400 block max-md:text-xl txt-shadow">
                                Trust the Best
                            </span>
                        </div>
                        <div className="search-box flex flex-col px-8 py-8 mt-8 max-w-full bg-neutral-950 bg-opacity-40 w-[666px] max-md:w-full max-md:px-5 max-md:mt-5">
                            <h1 className="text-teal-300 text-5xl font-bold mb-4 max-md:text-3xl">
                                I'M LOOKING FOR A
                            </h1>

                            <div className="flex flex-wrap gap-5 mb-4">
                                <div className="flex-1 w-full max-md:w-full">
                                    <select
                                        className="w-full p-4 text-lg text-gray-700 bg-white rounded-xl shadow-inner focus:outline-none"
                                        name="lookingFor"
                                        value={formData.lookingFor}
                                        onChange={handleChange}
                                    >
                                        <option value={`Male`}>
                                            {'Groom'}
                                        </option>
                                        <option value={`Female`}>
                                            {'Bride'}
                                        </option>
                                    </select>
                                    {/* <input
                                        type="text"
                                        name="lookingFor"
                                        value={formData.lookingFor}
                                        onChange={handleChange}
                                        placeholder="Women"
                                        className="w-full p-4 text-lg text-gray-700 bg-white rounded-xl shadow-inner focus:outline-none"
                                    /> */}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-5 mb-4">
                                <div className="flex-1 text-teal-300 text-2xl  max-md:text-xl">
                                    Age Between
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-5 w-full max-md:w-full">
                                <div className="flex-1 w-full max-md:w-full">
                                    <input
                                        type="number"
                                        name="ageFrom"
                                        value={formData.ageFrom}
                                        onChange={handleChange}
                                        placeholder="25"
                                        className="w-full p-4 text-lg text-gray-700 bg-white rounded-xl shadow-inner focus:outline-none"
                                    />
                                </div>
                                <div className="flex-1 w-full max-md:w-full">
                                    <input
                                        type="number"
                                        name="ageTo"
                                        value={formData.ageTo}
                                        onChange={handleChange}
                                        placeholder="30"
                                        className="w-full p-4 text-lg text-gray-700 bg-white rounded-xl shadow-inner focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-5 mb-4 mt-4">
                                <div className="flex-1 text-teal-300 text-2xl  max-md:text-xl">
                                    Of Religion
                                </div>
                                {/* <div className="flex-1 text-teal-300 text-2xl  max-md:text-xl">
                                    And living in
                                </div> */}
                            </div>

                            <div className="flex flex-wrap gap-5 mb-4">
                                <div className="flex-1 w-full max-md:w-full">
                                    <select
                                        className="w-full p-4 text-lg text-gray-700 bg-white rounded-xl shadow-inner focus:outline-none"
                                        name="religion"
                                        value={formData.religion}
                                        onChange={handleChange}
                                    >
                                        <option value={null}>Select</option>
                                        {RELIGION.map((item) => (
                                            <option
                                                key={item.key}
                                                value={item.value}
                                            >
                                                {item.key}
                                            </option>
                                        ))}
                                    </select>
                                    {/* <input
                                        type="text"
                                        name="religion"
                                        value={formData.religion}
                                        onChange={handleChange}
                                        placeholder="Select"
                                        className=""
                                    /> */}
                                </div>
                                {/* <div className="flex-1 w-full max-md:w-full">
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Mumbai"
                                        className="w-full p-4 text-lg text-gray-700 bg-white rounded-xl shadow-inner focus:outline-none"
                                    />
                                </div> */}
                            </div>

                            <div className="cursor-pointer px-16 btn-cus pt-4 pb-4 mt-5 text-2xl font-medium bg-sky-200 rounded-xl shadow-lg text-neutral-600 flex items-center justify-center max-md:px-5 max-md:w-full">
                                <button
                                    onClick={letsBegin}
                                    type="submit"
                                    className="bg-transparent border-none outline-none hover:bg-sky-200 text-lg font-medium text-neutral-600"
                                >
                                    Let’s Begin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex overflow-hidden flex-col pt-14 w-full bg-white max-md:max-w-full">
                <div className="find-box flex flex-wrap gap-5 self-center w-full max-w-[1356px] max-md:flex-col max-md:items-center max-md:gap-4">
                    <div className="flex flex-col mt-5 max-md:mt-3 max-md:w-full">
                        <div className="flex flex-col gap-5 max-md:gap-3 flow-box">
                            <div className="flex items-center gap-4 max-md:flex-col max-md:items-center max-md:gap-2">
                                <img
                                    loading="lazy"
                                    src={signup}
                                    className="object-contain shrink-0 aspect-[1.12]  w-[104px] max-md:w-[60px]"
                                    alt="Sign Up"
                                />
                                <div className="flex flex-col grow max-md:w-full max-md:text-center">
                                    <div className="text-2xl font-semibold text-orange-400 max-md:text-xl">
                                        Sign Up
                                    </div>
                                    <div className="mt-3.5 text-xl text-black max-md:text-sm max-md:mt-2">
                                        Register for free & put up your
                                        matrimony profile
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 max-md:flex-col-reverse max-md:items-center max-md:gap-2">
                                <div className="flex flex-col grow max-md:w-full max-md:text-center">
                                    <div
                                        className="text-2xl font-semibold text-orange-400 max-md:text-xl"
                                        style={{ textAlign: 'right' }}
                                    >
                                        Connect
                                    </div>
                                    <div
                                        className="text-xl text-black max-md:text-sm max-md:mt-2"
                                        style={{ textAlign: 'right' }}
                                    >
                                        Select & Connect with matches you like
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src={connect}
                                    className="object-contain shrink-0 aspect-[1.14]  w-[106px] max-md:w-[60px]"
                                    alt="Connect"
                                />
                            </div>

                            <div className="flex items-center gap-4 max-md:flex-col max-md:items-center max-md:gap-2">
                                <img
                                    loading="lazy"
                                    src={interact}
                                    className="object-contain shrink-0 aspect-[1.11]  w-[104px] max-md:w-[60px]"
                                    alt="Interact"
                                />
                                <div className="flex flex-col grow max-md:w-full max-md:text-center">
                                    <div className="text-2xl font-semibold text-orange-400 max-md:text-xl">
                                        Interact
                                    </div>
                                    <div className="mt-3 text-xl text-black max-md:text-sm max-md:mt-2">
                                        Become a premium member & start a
                                        conversation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex shrink-0 w-2 bg-sky-200 h-[400px] max-md:hidden" />
                    <div className="flow-box-text flex flex-col items-center justify-center flex-auto my-auto text-5xl text-black max-md:text-2xl max-md:mt-5">
                        <div className="">
                            <span className="font-semibold m-2">
                                Find Your{' '}
                            </span>
                            <br></br>
                            <span
                                className="font-semibold text-orange-400 m-2 mt-3 "
                                style={{ lineHeight: 1.5 }}
                            >
                                Special
                            </span>
                            <br></br>
                            <span className="font-semibold m-2">Someone</span>
                        </div>
                    </div>
                </div>

                <div className="mt-20 w-full bg-orange-400 max-md:mt-10 relative bnr-sec">
                    <div className="flex gap-5 items-center max-md:flex-col max-md:gap-4">
                        <div className="flex flex-col w-[43%] max-md:w-full max-md:mb-5">
                            <div className="flex gap-5 max-md:flex-col max-md:items-center">
                                <div className="flex flex-col w-[33%] max-md:w-full max-md:items-center">
                                    <img
                                        loading="lazy"
                                        src={ellipse}
                                        className="bnr1"
                                        style={{
                                            position: 'absolute',
                                            top: '-2px',
                                            bottom: '-7px',
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col flex-auto my-auto text-5xl text-black max-md:text-2xl max-md:text-center max-md:mt-5">
                                    <span className="font-semibold m-2">
                                        Mobile App on{' '}
                                    </span>

                                    <span className="font-semibold m-2">
                                        Android and iOS
                                    </span>

                                    <span className="font-semibold m-2">
                                        Coming Soon....
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[57%] max-md:w-full">
                            <div className="flex gap-5 justify-between items-start bnr-box mt-9 max-md:mt-10 max-md:flex-col max-md:items-center">
                                <div className="flex shrink-0 w-2 bg-sky-200 h-[538px] max-md:hidden" />
                                <img
                                    loading="lazy"
                                    src={couple}
                                    className="object-contain center-bnr mt-6 w-full aspect-[1.8] max-md:w-[70%]"
                                />
                                <img
                                    loading="lazy"
                                    src={ellipse2}
                                    className="bnr2"
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        bottom: '-7px',
                                    }}
                                />
                            </div>
                            <div className="w-full border-t border-gray-300 mt-4 max-md:mt-2" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 items-start mt-10 ml-20 max-w-[1736px] max-md:max-w-full testi-box">
                    <div className="flex flex-col self-end mt-11 max-md:mt-10 max-md:max-w-full">
                        <div className="w-full max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-4">
                                <div className="flex flex-col w-6/12 border-2 border-pink-300 max-md:w-full max-md:mb-4 bxt1">
                                    <div className="flex grow text-black max-md:mt-5">
                                        <img
                                            loading="lazy"
                                            src={leftArrow}
                                            className="arrow-none object-contain z-10 shrink-0 my-auto mr-0 aspect-square w-[50px] max-md:w-[40px]"
                                        />
                                        <div className="flex flex-col grow shrink-0 px-8 pt-6 pb-12 bg-white rounded-md basis-0 shadow-[4px_4px_5px_rgba(0,0,0,0.25)] w-fit max-md:px-5 max-md:max-w-full">
                                            <img
                                                loading="lazy"
                                                src={img1}
                                                className="object-contain w-full aspect-[1.67] max-md:w-full"
                                            />
                                            <div className="self-start mt-6 text-2xl font-medium max-md:text-2xl">
                                                Senorita{' '}
                                                <span className="">&</span> Ryan
                                            </div>
                                            <div className="mt-5 text-3xl max-md:text-xl text-description">
                                                I found my match on biyesadi.
                                                <br />
                                                com in one month. Not yet <br />
                                                married but going steady with{' '}
                                                <br />
                                                him. There cheers to here. Fairy{' '}
                                                <br />
                                                tales....
                                                <span className="text-teal-400">
                                                    {' '}
                                                    Read more
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-6/12 border-2 border-pink-300 max-md:w-full bxt-2">
                                    <div className="flex flex-col pt-6 pb-16 pl-8 mx-auto w-full text-black bg-white rounded-md shadow-[4px_4px_5px_rgba(0,0,0,0.25)] max-md:pt-4 max-md:pb-8 max-md:pl-4">
                                        <div className="flex flex-wrap gap-0.5 self-start mr-0 text-2xl font-medium max-md:flex-col max-md:items-center max-md:gap-2">
                                            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:w-full max-md:text-center">
                                                <img
                                                    loading="lazy"
                                                    src={img2}
                                                    className=" object-contain w-full aspect-[1.67] max-md:w-full"
                                                />
                                                <div className="self-start mt-6 max-md:text-xl">
                                                    Ruhi{' '}
                                                    <span className="">&</span>{' '}
                                                    Ryan
                                                </div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                src={rightArrow}
                                                className="object-contain arrow-none  shrink-0 self-end mt-72 aspect-square w-[50px] max-md:w-[40px] max-md:mt-5"
                                            />
                                        </div>
                                        <div className="mt-1.5 mr-8 text-3xl max-md:mr-2.5 max-md:text-xl max-md:text-center text-description">
                                            I found my match on biyesadi.
                                            <br />
                                            com in one month. Not yet <br />
                                            married but going steady with <br />
                                            him. There cheers to here. Fairy{' '}
                                            <br />
                                            tales....
                                            <span className="text-teal-400">
                                                {' '}
                                                Read more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-10 pt-4 pb-6 mt-6 ml-3 text-4xl font-semibold bg-sky-200 rounded-xl text-neutral-600 max-md:px-5 max-md:max-w-full max-md:text-2xl">
                            View all
                        </div>
                    </div>

                    <div className="testi-desc flex shrink-0 self-start w-2 bg-teal-300 h-[746px]" />
                    <div className="flex-auto my-auto text-4xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="font-semibold">Blissfully Match</span>
                        <br />
                        <span className="font-semibold text-black">
                            with
                        </span>{' '}
                        <span className="font-semibold text-orange-400">
                            Million
                        </span>{' '}
                        <span className="font-semibold text-black">of </span>
                        <br />
                        <span className="font-semibold">Success stories</span>
                    </div>
                </div>
                <div className="get-started flex flex-col justify-center items-center px-8 py-2 mt-20 w-full text-3xl bg-orange-400 text-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    <div className="flex flex-wrap gap-5 justify-between ml-8 w-full max-w-[1485px] max-md:max-w-full max-md:text-4xl">
                        <div className="my-auto justify-center items-center max-md:max-w-full max-md:text-2xl">
                            Your love story is ready to unfold!
                        </div>
                        <div className="px-8 py-6 justify-center items-center bg-sky-200 rounded-[30px_0px_30px_0px] max-md:px-5 max-md:text-2xl">
                            Get Started
                        </div>
                    </div>
                </div>
                <div className="search-filter flex gap-5 items-start px-16 py-20 mt-32 w-full bg-pink-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex-auto text-search self-stretch my-auto px-10 text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="font-semibold text-neutral-600">
                            Search by
                        </span>
                        <br />
                        <span className="font-semibold text-orange-400">
                            Popular
                        </span>{' '}
                        <br />
                        <span className="font-semibold text-neutral-600">
                            Matrimony Sites
                        </span>
                    </div>

                    <div className="flex mr-16 line shrink-0 w-2 bg-neutral-600 h-[600px]" />
                    <div className="flex-auto flex-col mt-3 max-md:max-w-full">
                        <div className="self-stretch max-md:max-w-full pb-5">
                            <div className="flex flex-wrap gap-5 max-md:flex-col">
                                <div className="flex flex-col w-full max-md:w-full">
                                    <div className="flex flex-col w-full text-2xl max-md:mt-10 max-md:max-w-full">
                                        <div className="self-start text-black text-opacity-80">
                                            By Mother Tongue
                                        </div>
                                        <div className="flex shrink-0 mt-5 max-w-full bg-zinc-300 h-[3px] w-full" />
                                        <div className="list-filter flex gap-5 justify-between mt-9 whitespace-nowrap text-neutral-500 max-md:mr-1 max-md:max-w-full">
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Bengali
                                            </div>
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Hindi
                                            </div>
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                English
                                            </div>
                                            <div className="flex-1 p-5 pb-4 bg-sky-200 rounded-tr-xl rounded-bl-xl text-neutral-600 max-md:pr-5">
                                                More Matrimonials
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch max-md:max-w-full pb-5">
                            <div className="flex flex-wrap gap-5 max-md:flex-col">
                                <div className="flex flex-col w-full max-md:w-full">
                                    <div className="flex flex-col w-full text-2xl max-md:mt-10 max-md:max-w-full">
                                        <div className="self-start text-black text-opacity-80">
                                            By Religion
                                        </div>
                                        <div className="flex shrink-0 mt-5 max-w-full bg-zinc-300 h-[3px] w-full" />
                                        <div className="list-filter flex gap-5 justify-between mt-9 whitespace-nowrap text-neutral-500 max-md:mr-1 max-md:max-w-full">
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Muslim
                                            </div>
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Hindu
                                            </div>
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Christian
                                            </div>
                                            <div className="flex-1 p-5 pb-4 bg-sky-200 rounded-tr-xl rounded-bl-xl text-neutral-600 max-md:pr-5">
                                                More Matrimonials
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch max-md:max-w-full pb-5">
                            <div className="flex flex-wrap gap-5 max-md:flex-col">
                                <div className="flex flex-col w-full max-md:w-full">
                                    <div className="flex flex-col w-full text-2xl max-md:mt-10 max-md:max-w-full">
                                        <div className="self-start text-black text-opacity-80">
                                            By Profession
                                        </div>
                                        <div className="flex shrink-0 mt-5 max-w-full bg-zinc-300 h-[3px] w-full" />
                                        <div className="list-filter flex gap-5 justify-between mt-9 whitespace-nowrap text-neutral-500 max-md:mr-1 max-md:max-w-full">
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Doctor
                                            </div>
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Teacher
                                            </div>
                                            <div className="flex-1 px-9 pt-3.5 pb-6 bg-white rounded-tr-xl rounded-bl-xl max-md:px-5">
                                                Engineer
                                            </div>
                                            <div className="flex-1 p-5 pb-4 bg-sky-200 rounded-tr-xl rounded-bl-xl text-neutral-600 max-md:pr-5">
                                                More Matrimonials
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-download flex flex-col items-center px-8 py-5 w-full text-3xl font-medium text-red-600 bg-gray-200 max-md:px-5 max-md:max-w-full max-md:text-4xl">
                    <div className="flex flex-wrap gap-2 items-center max-w-full w-[1234px] max-md:text-4xl">
                        <div className="grow max-md:max-w-full max-md:text-4xl">
                            Download the App Coming Soon
                        </div>
                        <img
                            loading="lazy"
                            src={playStore}
                            className="object-contain shrink-0 mt-2 w-60 max-w-full aspect-[3]"
                        />
                        <img
                            loading="lazy"
                            src={appStore}
                            className="object-contain shrink-0 self-stretch w-60 max-w-full aspect-[2.72]"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-10 py-12 w-full text-1xl text-center text-black bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <div className="flex flex-col mb-0 w-full max-w-[1626px] max-md:mb-2.5 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={bmLogo}
                            className="object-contain self-center max-w-full aspect-[4.05] w-[393px]"
                        />
                        <div className="mt-11 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
                            In today's world, finding a partner can be
                            difficult. There are so many options for singles to
                            choose from and they all seem alike! <br />
                            That is why Biyesadi was founded with the goal of
                            making your search easier we want you to find
                            happiness.
                        </div>
                        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                            Biyesadi is Bangladesh's No.1 Matchmaking Service,
                            founded with a simple objective - to help people
                            find happiness and love in <br />
                            their lives. Biyesadi has helped more than a million
                            Bangladeshi couples marry each other
                        </div>
                    </div>
                </div>
                <div className=" trusted-by flex flex-col justify-center items-start px-10 py-2 w-full bg-slate-200 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col w-full max-w-[1593px] max-md:max-w-full">
                        <div className="flex flex-wrap gap-5 mr-8 w-full max-w-[1561px] max-md:mr-2.5 max-md:max-w-full">
                            <div className="flex flex-grow items-center justify-between gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                                    <div className="text-btn px-12 py-7 mt-0 w-full text-4xl font-medium text-center bg-sky-200 rounded-xl text-neutral-600 max-md:px-5 max-md:mt-10">
                                        Trusted By Millions
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-5 justify-between text-3xl text-neutral-500 max-md:max-w-full w-full">
                                    <div className="flex flex-col items-center flex-grow">
                                        <img
                                            loading="lazy"
                                            src={bestmatches}
                                            className="object-contain max-w-full aspect-[1.11] w-[123px]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center flex-grow">
                                        <img
                                            loading="lazy"
                                            src={verifiedprofile}
                                            className="object-contain max-w-full aspect-[1.11] w-[123px]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center flex-grow">
                                        <img
                                            loading="lazy"
                                            src={privacy}
                                            className="object-contain max-w-full aspect-[1.11] w-[123px]"
                                        />
                                    </div>
                                    <div className="flex shrink-0 self-end mt-1 max-w-full bg-zinc-300 h-[3px] w-full max-w-[900px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
