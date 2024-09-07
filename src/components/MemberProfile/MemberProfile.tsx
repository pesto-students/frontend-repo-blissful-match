import * as React from 'react';
import brideImg from '@assets/images/best-tanks-tops-8 1.png';
import { getMembersProfile } from '../../api';

const MemberProfile: React.FC = () => {
    const [profile, setProfile] = React.useState();
    const images = [
        brideImg,
        brideImg,
        brideImg,
        brideImg,
        brideImg,
        brideImg,
        brideImg,
    ];

    const [selectedImage, setSelectedImage] = React.useState<string>(images[0]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const fetchMembersProfile = async (userId: string) => {
        setProfile(await getMembersProfile(userId));
    };

    React.useEffect(() => {
        if (!profile) {
            fetchMembersProfile('');
        }
    });

    const profileData = {
        name: 'POOJA L.',
        age: 30,
        location: 'MUMBAI',
        religion: 'HINDU',
        motherTongue: 'PUNJABI',
        height: '5’2',
        postedBy: 'SELF',
        about: `Pooja L., a 30-year-old banker from the picturesque state of Punjab.
            Pooja is not just a dedicated professional but also a free spirit who
            finds immense joy in traveling. Her profession as a banker has honed
            her analytical skills and financial acumen, making her a stable and
            reliable partner. With a commendable career in the banking sector, she
            balances her professional and personal life with grace and ease.

            Pooja's love for travel is more than just a hobby; it is a way of
            life. She has explored various parts of India and dreams of seeing the
            world with a partner who shares her passion for adventure. Her travels
            have not only broadened her horizons but have also instilled in her a
            deep appreciation for different cultures and traditions. Pooja's
            vibrant personality and zest for life are evident in the way she
            embraces new experiences and challenges.`,
        basics: {
            drinks: 'Occasionally',
            smoking: 'No',
            party: 'Sometimes',
            diet: 'Non-Veg',
            personalValue: 'Free Woman',
            sunSign: 'Taurus',
        },
        partnerPreference: {
            heightFrom: '5.8',
            ageFrom: 34,
            maritalStatus: 'UNMARRIED',
            weight: 70,
            childrenPreference: 'NO',
            heightTo: '5.11',
            ageTo: 38,
            interCaste: 'N/A',
            salaryExpectation: '1 CR.',
            bodyType: 'AVERAGE',
            complexion: 'FAIR',
            mangal: 'N/A',
            preferredCities: 'MUMBAI',
            partnerExpectations: 'KIND, UNDERSTANDING, RESPONSIBLE',
        },
    };

    return (
        <>
            <div className="flex overflow-hidden flex-col bg-white  profile-main">
                <div className="flex flex-col items-start self-center mt-4 w-full max-w-[1400px] max-md:mt-10 max-md:max-w-full">
                    <div className="max-w-full w-[1000px] ">
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-3 py-1 w-full bg-gray-200 rounded-xl max-md:pr-5 max-md:mt-8 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={selectedImage}
                                        className="pro-img-main object-contain w-full aspect-[0.68] max-md:max-w-full "
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3 w-8/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col items-start mt-4 w-full text-lg text-red-950 max-md:mt-8 max-md:max-w-full fs-14">
                                    <div className="flex gap-2 max-w-full w-[280px]">
                                        <div className="flex flex-col font-bold">
                                            <div>NAME: </div>
                                            <div className="self-start mt-4 max-md:mt-6">
                                                AGE:
                                            </div>
                                        </div>
                                        <div className="flex flex-col font-medium">
                                            <div className="self-end">
                                                {profileData.name}
                                            </div>
                                            <div className="self-start mt-4 max-md:mt-6">
                                                {profileData.age}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4 whitespace-nowrap max-md:mt-6">
                                        <div className="grow font-bold">
                                            LOCATION:
                                        </div>
                                        <div className="font-medium basis-auto">
                                            {profileData.location}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4 whitespace-nowrap max-md:mt-6">
                                        <div className="font-bold basis-auto">
                                            RELIGION:
                                        </div>
                                        <div className="font-medium basis-auto">
                                            {profileData.religion}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4 max-md:mt-6">
                                        <div className="flex-auto font-bold">
                                            MOTHER TONGUE:
                                        </div>
                                        <div className="font-medium basis-auto">
                                            {profileData.motherTongue}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-4 whitespace-nowrap max-md:mt-6">
                                        <div className="grow font-bold">
                                            HEIGHT:
                                        </div>
                                        <div className="font-medium">
                                            {profileData.height}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-4 max-md:mt-6">
                                        <div className="grow font-bold">
                                            POSTED BY:
                                        </div>
                                        <div className="font-medium">
                                            {profileData.postedBy}
                                        </div>
                                    </div>

                                    {/* Image list */}
                                    <div className="flex gap-3 bg-gray-300 p-3 mt-12 max-w-3xl overflow-x-scroll overflow-y-hidden">
                                        {images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-16 h-auto cursor-pointer bg-white"
                                                onClick={() =>
                                                    handleImageClick(image)
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-xl font-bold text-black max-md:mt-6">
                        ABOUT:
                    </div>
                    <div className="self-stretch mt-8 text-lg text-black max-md:mt-6 max-md:mr-2.5 max-md:max-w-full">
                        {profileData.about}
                    </div>
                    <div className="self-stretch px-8 pt-2 pb-4 mt-8 text-xl font-medium text-center text-white whitespace-nowrap bg-orange-400 max-md:px-2 max-md:mt-6 max-md:max-w-full">
                        CONNECT
                    </div>
                    <div className="mt-10 text-xl font-bold text-black max-md:mt-6">
                        BASICS & LIFESTYLE:
                    </div>
                    <div className="flex  flex-wrap gap-3 justify-between mt-8 max-w-full text-xl font-bold text-black w-[900px] max-md:mt-6 fs-14">
                        <div>
                            Drinks:{' '}
                            <span className="">
                                {profileData.basics.drinks}
                            </span>
                            <br />
                            <br />
                            Smoking:{' '}
                            <span className="">
                                {profileData.basics.smoking}
                            </span>
                            <br />
                            <br />
                            Party:{' '}
                            <span className="">{profileData.basics.party}</span>
                            <br />
                            <br />
                        </div>
                        <div className="max-md:max-w-full">
                            Diet:{' '}
                            <span className="">{profileData.basics.diet}</span>
                            <br />
                            <br />
                            Personal Value:{' '}
                            <span className="">
                                {profileData.basics.personalValue}
                            </span>
                            <br />
                            <br />
                            Sun Sign:{' '}
                            <span className="">
                                {profileData.basics.sunSign}
                            </span>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="mt-10 text-xl font-bold text-black max-md:mt-6 max-md:max-w-full">
                        PARTNER PREFERENCE:
                    </div>
                    <div className="mt-10 w-full max-w-[1400px] max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-3 max-md:flex-col">
                            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-xl font-bold text-black max-md:mt-6 max-md:max-w-full fs-14">
                                    <div className="max-md:max-w-full">
                                        HEIGHT FROM:{' '}
                                        <span className="font-medium">
                                            {
                                                profileData.partnerPreference
                                                    .heightFrom
                                            }
                                        </span>
                                        <br />
                                        <br />
                                        AGE FROM:{' '}
                                        <span className="font-medium">
                                            {
                                                profileData.partnerPreference
                                                    .ageFrom
                                            }
                                        </span>
                                        <br />
                                        <br />
                                        MARITAL STATUS:{' '}
                                        <span className="font-medium">
                                            {
                                                profileData.partnerPreference
                                                    .maritalStatus
                                            }
                                        </span>
                                        <br />
                                    </div>
                                    <div className="self-start mt-8 max-md:mt-6">
                                        WEIGHT :{' '}
                                        <span className="font-medium">
                                            {
                                                profileData.partnerPreference
                                                    .weight
                                            }
                                        </span>
                                    </div>
                                    <div className="mt-6 mr-2 max-md:mr-2.5 max-md:max-w-full">
                                        CHILDREN PREFERENCE:{' '}
                                        <span className="font-medium">
                                            {
                                                profileData.partnerPreference
                                                    .childrenPreference
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-full">
                                <div className="text-xl font-bold text-black max-md:mt-6 max-md:max-w-full fs-14">
                                    HEIGHT TO:{' '}
                                    <span className="font-medium">
                                        {profileData.partnerPreference.heightTo}
                                    </span>
                                    <br />
                                    <br />
                                    AGE TO:
                                    <span className="font-medium">
                                        {profileData.partnerPreference.ageTo}
                                    </span>
                                    <br />
                                    <br />
                                    INTER CASTE:
                                    <span className="font-medium">
                                        {
                                            profileData.partnerPreference
                                                .interCaste
                                        }
                                    </span>
                                    <br />
                                    <br />
                                    SALARY EXPECTATION:{' '}
                                    <span className="font-medium">
                                        {
                                            profileData.partnerPreference
                                                .salaryExpectation
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-full">
                                <div className="text-xl font-bold text-black max-md:mt-6 max-md:max-w-full fs-14">
                                    BODY TYPE:{' '}
                                    <span className="font-medium">
                                        {profileData.partnerPreference.bodyType}
                                    </span>
                                    <br />
                                    <br />
                                    COMPLEXION:{' '}
                                    <span className="font-medium">
                                        {
                                            profileData.partnerPreference
                                                .complexion
                                        }
                                    </span>
                                    <br />
                                    <br />
                                    MANGAL:{' '}
                                    <span className="font-medium">
                                        {profileData.partnerPreference.mangal}
                                    </span>
                                    <br />
                                    <br />
                                    PREFERRED CITIES:{' '}
                                    {
                                        profileData.partnerPreference
                                            .preferredCities
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-xl font-bold text-black max-md:mt-6 max-md:max-w-full mb-10 fs-14">
                        PARTNER EXPECTATION IN DETAIL :{' '}
                        <span className="font-medium">
                            {profileData.partnerPreference.partnerExpectations}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberProfile;
