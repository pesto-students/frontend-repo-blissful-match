import * as React from 'react';
import brideImg from '@assets/images/best-tanks-tops-8 1.png';
import './MyProfile.css';

export function ProfilePage() {
    const images = [
        brideImg,
        brideImg,
        brideImg,
        brideImg,
        brideImg,
        brideImg,
        brideImg,
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedImage, setSelectedImage] = React.useState<string>(images[0]);

    const [isEditingProfile, setIsEditingProfile] = React.useState(false);
    const [isEditingAbout, setIsEditingAbout] = React.useState(false);
    const [isEditingBasics, setIsEditingBasics] = React.useState(false);
    const [isEditingPreferences, setIsEditingPreferences] =
        React.useState(false);

    const [profileData, setProfileData] = React.useState({
        profileData: {
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
        },
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
    });

    const handleInputChange = (e, section, field) => {
        const { value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    };

    return (
        <>
            <div className="flex overflow-hidden flex-col bg-white pb-10">
                <div className="flex flex-col items-start self-center mt-4 w-full max-w-[1400px] max-md:mt-10 max-md:max-w-full">
                    <div className="max-w-full w-[1000px]">
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-3 py-1 w-full bg-gray-200 rounded-xl max-md:pr-5 max-md:mt-8 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={selectedImage}
                                        className="object-contain w-full aspect-[0.68] max-md:max-w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3 w-8/12  max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col items-start mt-4 w-full text-lg text-red-950 max-md:mt-8 max-md:max-w-full">
                                    <div className="flex gap-2 max-w-full ">
                                        <div className="flex flex-col font-bold">
                                            <div
                                                className=""
                                                style={{ minWidth: '200px' }}
                                            >
                                                NAME:{' '}
                                            </div>
                                            <div
                                                className="self-start mt-4 max-md:mt-6 "
                                                style={{ minWidth: '200px' }}
                                            >
                                                AGE:
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col font-medium ml-2"
                                            style={{ minWidth: '200px' }}
                                        >
                                            <div className="self-start">
                                                {isEditingProfile ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profileData
                                                                .profileData
                                                                .name
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'profileData',
                                                                'name'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profileData.profileData.name
                                                )}
                                            </div>
                                            <div className="self-start mt-4 max-md:mt-6">
                                                {isEditingProfile ? (
                                                    <input
                                                        type="number"
                                                        value={
                                                            profileData
                                                                .profileData.age
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'profileData',
                                                                'age'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profileData.profileData.age
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4 whitespace-nowrap max-md:mt-6">
                                        <div
                                            className="grow font-bold "
                                            style={{ minWidth: '200px' }}
                                        >
                                            LOCATION:
                                        </div>
                                        <div className="font-medium">
                                            {isEditingProfile ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        profileData.profileData
                                                            .location
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            'profileData',
                                                            'location'
                                                        )
                                                    }
                                                    className="border rounded px-2 py-1"
                                                />
                                            ) : (
                                                profileData.profileData.location
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4 whitespace-nowrap max-md:mt-6">
                                        <div
                                            className="font-bold basis-auto "
                                            style={{ minWidth: '200px' }}
                                        >
                                            RELIGION:
                                        </div>
                                        <div className="font-medium basis-auto">
                                            {isEditingProfile ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        profileData.profileData
                                                            .religion
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            'profileData',
                                                            'religion'
                                                        )
                                                    }
                                                    className="border rounded px-2 py-1"
                                                />
                                            ) : (
                                                profileData.profileData.religion
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4 max-md:mt-6">
                                        <div
                                            className="flex-auto font-bold "
                                            style={{ minWidth: '200px' }}
                                        >
                                            MOTHER TONGUE:
                                        </div>
                                        <div className="font-medium basis-auto">
                                            {isEditingProfile ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        profileData.profileData
                                                            .motherTongue
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            'profileData',
                                                            'motherTongue'
                                                        )
                                                    }
                                                    className="border rounded px-2 py-1"
                                                />
                                            ) : (
                                                profileData.profileData
                                                    .motherTongue
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-4 whitespace-nowrap max-md:mt-6">
                                        <div
                                            className="grow font-bold "
                                            style={{ minWidth: '200px' }}
                                        >
                                            HEIGHT:
                                        </div>
                                        <div className="font-medium ml-2">
                                            {isEditingProfile ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        profileData.profileData
                                                            .height
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            'profileData',
                                                            'height'
                                                        )
                                                    }
                                                    className="border rounded px-2 py-1"
                                                />
                                            ) : (
                                                profileData.profileData.height
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-4 max-md:mt-6">
                                        <div
                                            className="grow font-bold "
                                            style={{ minWidth: '200px' }}
                                        >
                                            POSTED BY:
                                        </div>
                                        <div className="font-medium ml-2">
                                            {isEditingProfile ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        profileData.profileData
                                                            .postedBy
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            'profileData',
                                                            'postedBy'
                                                        )
                                                    }
                                                    className="border rounded px-2 py-1"
                                                />
                                            ) : (
                                                profileData.profileData.postedBy
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setIsEditingProfile(
                                                !isEditingProfile
                                            )
                                        }
                                        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
                                    >
                                        {isEditingProfile
                                            ? 'Save Profile'
                                            : 'Edit Profile'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="flex flex-col items-start mt-8 w-full max-w-[1400px] max-md:max-w-full">
                        <div className="flex flex-col w-full bg-gray-200 rounded-xl px-5 py-4">
                            <h2 className="text-xl font-bold mb-4">ABOUT</h2>
                            {isEditingAbout ? (
                                <textarea
                                    value={profileData.profileData.about}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e,
                                            'profileData',
                                            'about'
                                        )
                                    }
                                    className="border  text-black rounded px-2 py-1 w-full"
                                />
                            ) : (
                                <p>{profileData.profileData.about}</p>
                            )}
                            <button
                                onClick={() =>
                                    setIsEditingAbout(!isEditingAbout)
                                }
                                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
                            >
                                {isEditingAbout ? 'Save About' : 'Edit About'}
                            </button>
                        </div>
                    </div>

                    {/* Basics & Lifestyle Section */}
                    <div className="flex flex-col items-start mt-8 w-full max-w-[1400px] max-md:max-w-full">
                        <div className="flex flex-col w-full bg-gray-200 rounded-xl px-5 py-4">
                            <h2 className="text-xl font-bold mb-4">
                                BASICS & LIFESTYLE
                            </h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <div className="font-bold">Drinks:</div>
                                    <div>
                                        {isEditingBasics ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData.basics.drinks
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'basics',
                                                        'drinks'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.basics.drinks
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Smoking:</div>
                                    <div>
                                        {isEditingBasics ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData.basics.smoking
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'basics',
                                                        'smoking'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.basics.smoking
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Party:</div>
                                    <div>
                                        {isEditingBasics ? (
                                            <input
                                                type="text"
                                                value={profileData.basics.party}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'basics',
                                                        'party'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.basics.party
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Diet:</div>
                                    <div>
                                        {isEditingBasics ? (
                                            <input
                                                type="text"
                                                value={profileData.basics.diet}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'basics',
                                                        'diet'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.basics.diet
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Personal Value:
                                    </div>
                                    <div>
                                        {isEditingBasics ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData.basics
                                                        .personalValue
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'basics',
                                                        'personalValue'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.basics.personalValue
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Sun Sign:</div>
                                    <div>
                                        {isEditingBasics ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData.basics.sunSign
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'basics',
                                                        'sunSign'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.basics.sunSign
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    setIsEditingBasics(!isEditingBasics)
                                }
                                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
                            >
                                {isEditingBasics
                                    ? 'Save Basics & Lifestyle'
                                    : 'Edit Basics & Lifestyle'}
                            </button>
                        </div>
                    </div>

                    {/* Partner Preference Section */}
                    <div className="flex flex-col items-start mt-8 w-full max-w-[1400px] max-md:max-w-full">
                        <div className="flex flex-col w-full bg-gray-200 rounded-xl px-5 py-4">
                            <h2 className="text-xl font-bold mb-4">
                                PARTNER PREFERENCE
                            </h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Height From:
                                    </div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .heightFrom
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'heightFrom'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .heightFrom
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Age From:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="number"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .ageFrom
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'ageFrom'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .ageFrom
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Marital Status:
                                    </div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .maritalStatus
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'maritalStatus'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .maritalStatus
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Weight:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="number"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .weight
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'weight'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference.weight
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Children Preference:
                                    </div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .childrenPreference
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'childrenPreference'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .childrenPreference
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Height To:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .heightTo
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'heightTo'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .heightTo
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Age To:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="number"
                                                value={
                                                    profileData
                                                        .partnerPreference.ageTo
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'ageTo'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference.ageTo
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Intercaste:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .interCaste
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'interCaste'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .interCaste
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Salary Expectation:
                                    </div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .salaryExpectation
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'salaryExpectation'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .salaryExpectation
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Body Type:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .bodyType
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'bodyType'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .bodyType
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Complexion:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .complexion
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'complexion'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .complexion
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">Mangal:</div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .mangal
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'mangal'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference.mangal
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Preferred Cities:
                                    </div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .preferredCities
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'preferredCities'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .preferredCities
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        Partner Expectations:
                                    </div>
                                    <div>
                                        {isEditingPreferences ? (
                                            <input
                                                type="text"
                                                value={
                                                    profileData
                                                        .partnerPreference
                                                        .partnerExpectations
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        'partnerPreference',
                                                        'partnerExpectations'
                                                    )
                                                }
                                                className="border rounded px-2 py-1"
                                            />
                                        ) : (
                                            profileData.partnerPreference
                                                .partnerExpectations
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    setIsEditingPreferences(
                                        !isEditingPreferences
                                    )
                                }
                                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
                            >
                                {isEditingPreferences
                                    ? 'Save Partner Preferences'
                                    : 'Edit Partner Preferences'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
