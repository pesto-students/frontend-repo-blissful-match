import * as React from 'react';
import tick from '@assets/images/tick.png';
import cross from '@assets/images/cross.png';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import Footer from '@components/Footer/Footer';
import useRazorPay, { RazorPayOptions } from '@utils/razor-pay';
import { createOrder, getPlans, verifySignature } from '../api';
import { SubscriptionPlan } from '../api/models';

export function Packages() {
    const [plans, setPlans] = React.useState<Array<SubscriptionPlan>>([]);
    const [RazorPay] = useRazorPay();

    React.useEffect(() => {
        getPlanDetails();
    });

    const getPlanDetails = async () => {
        const response = await getPlans();
        if (response?.length > 0) {
            setPlans(response.filter((x) => x.name !== 'PLATINUM SPECIAL'));
        }
    };

    const handlePayment = React.useCallback(
        async (planId: string, amount: number) => {
            const order = await createOrder({ plan_id: planId });

            const options: RazorPayOptions = {
                key: 'rzp_test_anWHmZFzkBielD', // Your Razorpay key id
                amount: (amount * 100).toString(), // Amount in paise (50000 paise = INR 500)
                currency: 'INR',
                name: 'Blissful Match',
                order_id: order.orderid,
                description: 'Thank you for your payment',
                image: 'https://incandescent-bubblegum-28b238.netlify.app/logo.748c917bb8275b144837129ece568f79.png',
                handler: function (response) {
                    // alert('Payment successful: ' + JSON.stringify(response));
                    // alert(
                    //     'Payment successful. Payment ID: ' +
                    //         response.razorpay_payment_id
                    // );
                    if (
                        response.razorpay_order_id &&
                        response.razorpay_payment_id &&
                        response.razorpay_signature
                    ) {
                        const postData = {
                            orderId: response.razorpay_order_id,
                            payment_id: response.razorpay_payment_id,
                            signature: response.razorpay_signature,
                        };
                        verifySignature(postData).then((response) => {
                            console.log(
                                'Response from server:',
                                response,
                                response.status
                            );
                            alert('Data sent successfully!');
                        });
                    }
                },
                prefill: {
                    name: 'Anil Kumar',
                    email: 'anil@example.com',
                    contact: '9999999999',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const razorpay = new RazorPay(options);
            razorpay.open();
        },
        [RazorPay]
    );
    return (
        <>
            <Navbar />
            <Banner title={'Packages'} />
            <div className="flex flex-col items-center pt-6 pb-4 bg-white max-w-screen-lg mx-auto">
                <div className="text-3xl font-medium text-center text-black mb-4 max-md:text-2xl">
                    Finding Your Perfect Partner Has Never Been Easier
                </div>
                <div className="text-lg text-black mb-6 px-4 max-md:text-base">
                    <p className="mb-3">
                        At Blissful Match, we believe in the beauty of lifelong
                        companionship. Our platform is designed to help you find
                        a partner who shares your values, interests, and dreams.
                        With our advanced matchmaking technology and
                        personalized support, you’re just a few clicks away from
                        meeting someone special.
                    </p>
                    <p className="font-bold text-xl">
                        Why Choose Blissful Match?
                    </p>
                    <ul className="list-none pl-0 mt-2 text-lg">
                        <li className="flex items-start mb-2">
                            <img
                                src={tick}
                                alt="tick"
                                className="w-5 h-5 mr-2"
                            />
                            Personalized Matchmaking: Our algorithm understands
                            what matters to you and finds partners who align
                            with your preferences.
                        </li>
                        <li className="flex items-start mb-2">
                            <img
                                src={tick}
                                alt="tick"
                                className="w-5 h-5 mr-2"
                            />
                            Verified Profiles: Safety is our priority. Every
                            profile on Blissful Match is verified for
                            authenticity, ensuring a genuine and respectful
                            community.
                        </li>
                        <li className="flex items-start mb-2">
                            <img
                                src={tick}
                                alt="tick"
                                className="w-5 h-5 mr-2"
                            />
                            Success Stories: Join thousands of happy couples who
                            found love on Blissful Match. Your story could be
                            next!
                        </li>
                    </ul>
                </div>
                <div className="text-2xl font-semibold text-center text-black mb-20 max-md:text-xl">
                    Choose Your Plan
                </div>
                <div className="flex flex-wrap justify-center gap-10 max-w-full pricing mb-10">
                    {plans.map((plan) => (
                        <div
                            key={plan._id}
                            className="flex flex-col bg-white hover:bg-[#add8e6] hover:border-neutral-600 rounded-xl border border-orange-400 p-3 max-w-xs text-center max-md:max-w-full"
                        >
                            <div className="text-xl font-semibold text-orange-400 mb-1">
                                {plan.name}
                            </div>
                            <div className="text-3xl text-orange-400 mb-1 amount">
                                &#8377; {plan.amount}
                            </div>
                            {/* <div className="text-lg mb-3">User/Month</div> */}
                            <ul className="list-none pl-0 text-lg">
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    {plan.contact_limit} CONNECTS/MONTH
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.website_access
                                            ? 'text-slate-400'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={plan.website_access ? tick : cross}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    WEBSITE ACCESS
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.unlimited_profiles
                                            ? 'text-slate-400'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={
                                            plan.unlimited_profiles
                                                ? tick
                                                : cross
                                        }
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    UN-LIMITED PROFILES
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.shortlist_profiles
                                            ? 'text-slate-400'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={
                                            plan.shortlist_profiles
                                                ? tick
                                                : cross
                                        }
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    SHORTLIST PROFILES
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.advisor ? 'text-slate-400' : ''
                                    }`}
                                >
                                    <img
                                        src={plan.advisor ? tick : cross}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    RELATIONSHIP ADVISER
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.introduction_meetings
                                            ? 'text-slate-400'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={
                                            plan.introduction_meetings
                                                ? tick
                                                : cross
                                        }
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    INTRODUCTION MEETING
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.handpicked_matches
                                            ? 'text-slate-400'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={
                                            plan.handpicked_matches
                                                ? tick
                                                : cross
                                        }
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    HANDPICKED MATCHES
                                </li>
                                <li
                                    className={`flex items-start mb-2 ${
                                        !plan.premium_benefits
                                            ? 'text-slate-400'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={
                                            plan.premium_benefits ? tick : cross
                                        }
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    PREMIUM BENEFITS
                                </li>
                            </ul>
                            <button
                                className="mt-4 px-4 py-2 text-xl font-medium text-white bg-orange-400 hover:text-orange-400 hover:bg-white rounded"
                                onClick={() =>
                                    handlePayment(plan._id, plan.amount)
                                }
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
                <br />
                {/* Below commented code is for reference uncomment it to see the desired look */}
                {/* 
                    <div className="flex flex-wrap justify-center gap-2 max-w-full">
                        <div className="flex flex-col bg-[#add8e6] rounded-xl border border-neutral-600 p-3 max-w-xs text-center max-md:max-w-full">
                            <div className="text-xl font-semibold mb-1">
                                Advance
                            </div>
                            <div className="text-3xl mb-1 ">₹1999</div>
                            <div className="text-lg mb-3 ">User/Month</div>
                            <ul className="list-none pl-0 mb-3 text-lg">
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    UNLIMITED CONNECTS/MONTH
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    UNLIMITED MESSAGES
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    VIEW UNLIMITED PROFILES
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    PROFILE SUGGESTIONS
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    VIEW PHONE
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    RELATIONSHIP ADVISOR
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    INTRODUCTIONS & MEETINGS
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    HANDPICKED MATCHES
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    FIRST DATE
                                </li>
                            </ul>
                            <button className="mt-4 px-4 py-2 text-xl font-medium text-orange-400 bg-white rounded">
                                Choose Plan
                            </button>
                        </div>

                        <div className="flex flex-col bg-white rounded-xl border border-sky-900 p-3 max-w-xs text-center max-md:max-w-full">
                            <div className="text-xl font-semibold text-orange-400 mb-1">
                                Premium
                            </div>
                            <div className="text-3xl text-orange-400 mb-1">
                                ₹1200
                            </div>
                            <div className="text-lg mb-3">User/Month</div>
                            <ul className="list-none pl-0 mb-3 text-lg">
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    30 CONNECTS/MONTH
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    UNLIMITED MESSAGES
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    VIEW UNLIMITED PROFILES
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    PROFILE SUGGESTIONS
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    VIEW PHONE
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    RELATIONSHIP ADVISOR
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    INTRODUCTIONS & MEETINGS
                                </li>
                                <li className="flex items-start mb-2">
                                    <img
                                        src={tick}
                                        alt="tick"
                                        className="w-5 h-5 mr-2"
                                    />
                                    HANDPICKED MATCHES
                                </li>
                            </ul>
                            <button className="mt-4 px-4 py-2 text-xl font-medium text-white bg-orange-400 rounded">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                */}
            </div>
            <Footer />
        </>
    );
}
