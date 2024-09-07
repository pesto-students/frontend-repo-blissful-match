import * as React from 'react';
import brideImg from '@assets/images/best-tanks-tops-8 1.png';
import './MyProfile.css';
import { getMyProfile } from '../../api';

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

    const [profile, setProfile] = React.useState<ProfileDTO>();
    const getProfileData = async () => {
        setProfile(await getMyProfile());
    };

    React.useEffect(() => {
        if (!profile) {
            getProfileData();
        }
    });

    const handleInputChange = (e, section, field) => {
        const { value } = e.target;
        setProfile((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    };

    return (
        <>
            {profile ? (
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
                                                        style={{
                                                            minWidth: '200px',
                                                        }}
                                                    >
                                                        NAME:{' '}
                                                    </div>
                                                    <div
                                                        className="self-start mt-4 max-md:mt-6 "
                                                        style={{
                                                            minWidth: '200px',
                                                        }}
                                                    >
                                                        AGE:
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex flex-col font-medium ml-2"
                                                    style={{
                                                        minWidth: '200px',
                                                    }}
                                                >
                                                    <div className="self-start">
                                                        {isEditingProfile ? (
                                                            <>
                                                                <input
                                                                    type="text"
                                                                    value={
                                                                        profile
                                                                            .basic_info
                                                                            .first_name
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleInputChange(
                                                                            e,
                                                                            'basic_info',
                                                                            'first_name'
                                                                        )
                                                                    }
                                                                    className="border rounded px-2 py-1"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    value={
                                                                        profile
                                                                            .basic_info
                                                                            .last_name
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleInputChange(
                                                                            e,
                                                                            'basic_info',
                                                                            'last_name'
                                                                        )
                                                                    }
                                                                    className="border rounded px-2 py-1"
                                                                />
                                                            </>
                                                        ) : (
                                                            `${profile.basic_info.first_name} ${profile.basic_info.last_name}`
                                                        )}
                                                    </div>
                                                    <div className="self-start mt-4 max-md:mt-6">
                                                        {isEditingProfile ? (
                                                            <input
                                                                type="number"
                                                                value={
                                                                    profile
                                                                        .basic_info
                                                                        .age
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        e,
                                                                        'basic_info',
                                                                        'age'
                                                                    )
                                                                }
                                                                className="border rounded px-2 py-1"
                                                            />
                                                        ) : (
                                                            profile.basic_info
                                                                .age
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 mt-4 whitespace-nowrap max-md:mt-6">
                                                <div
                                                    className="grow font-bold "
                                                    style={{
                                                        minWidth: '200px',
                                                    }}
                                                >
                                                    LOCATION:
                                                </div>
                                                <div className="font-medium">
                                                    {isEditingProfile ? (
                                                        <input
                                                            type="text"
                                                            value={
                                                                profile
                                                                    .basic_info
                                                                    .address
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    e,
                                                                    'basic_info',
                                                                    'address'
                                                                )
                                                            }
                                                            className="border rounded px-2 py-1"
                                                        />
                                                    ) : (
                                                        profile.basic_info
                                                            .address
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-4 mt-4 whitespace-nowrap max-md:mt-6">
                                                <div
                                                    className="font-bold basis-auto "
                                                    style={{
                                                        minWidth: '200px',
                                                    }}
                                                >
                                                    RELIGION:
                                                </div>
                                                <div className="font-medium basis-auto">
                                                    {isEditingProfile ? (
                                                        <input
                                                            type="text"
                                                            value={
                                                                profile
                                                                    .religious_social_background
                                                                    .religion
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    e,
                                                                    'religious_social_background',
                                                                    'religion'
                                                                )
                                                            }
                                                            className="border rounded px-2 py-1"
                                                        />
                                                    ) : (
                                                        profile
                                                            .religious_social_background
                                                            .religion
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-4 whitespace-nowrap max-md:mt-6">
                                                <div
                                                    className="grow font-bold "
                                                    style={{
                                                        minWidth: '200px',
                                                    }}
                                                >
                                                    HEIGHT:
                                                </div>
                                                <div className="font-medium ml-2">
                                                    {isEditingProfile ? (
                                                        <input
                                                            type="text"
                                                            value={
                                                                profile
                                                                    .physical_attributes
                                                                    .height
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    e,
                                                                    'physical_attributes',
                                                                    'height'
                                                                )
                                                            }
                                                            className="border rounded px-2 py-1"
                                                        />
                                                    ) : (
                                                        profile
                                                            .physical_attributes
                                                            .height
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
                                    <h2 className="text-xl font-bold mb-4">
                                        ABOUT
                                    </h2>
                                    {isEditingAbout ? (
                                        <textarea
                                            value={profile.basic_info.about_me}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    'basic_info',
                                                    'about_me'
                                                )
                                            }
                                            className="border  text-black rounded px-2 py-1 w-full"
                                        />
                                    ) : (
                                        <p>{profile.basic_info.about_me}</p>
                                    )}
                                    <button
                                        onClick={() =>
                                            setIsEditingAbout(!isEditingAbout)
                                        }
                                        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
                                    >
                                        {isEditingAbout
                                            ? 'Save About'
                                            : 'Edit About'}
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
                                            <div className="font-bold">
                                                Drinks:
                                            </div>
                                            <div>
                                                {isEditingBasics ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .physical_attributes
                                                                .drink
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'physical_attributes',
                                                                'drink'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.physical_attributes
                                                        .drink
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Smoking:
                                            </div>
                                            <div>
                                                {isEditingBasics ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .physical_attributes
                                                                .smoke
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'physical_attributes',
                                                                'smoke'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.physical_attributes
                                                        .smoke
                                                )}
                                            </div>
                                        </div>
                                        {/* <div className="flex justify-between">
                                            <div className="font-bold">
                                                Party:
                                            </div>
                                            <div>
                                                {isEditingBasics ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile.basics.party
                                                        }
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
                                                    profile.basics.party
                                                )}
                                            </div>
                                        </div> */}
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Diet:
                                            </div>
                                            <div>
                                                {isEditingBasics ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .physical_attributes
                                                                .diet
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'physical_attributes',
                                                                'diet'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.physical_attributes
                                                        .diet
                                                )}
                                            </div>
                                        </div>
                                        {/* <div className="flex justify-between">
                                            <div className="font-bold">
                                                Personal Value:
                                            </div>
                                            <div>
                                                {isEditingBasics ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile.basics
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
                                                    profile.basics.personalValue
                                                )}
                                            </div>
                                        </div> */}
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Sun Sign:
                                            </div>
                                            <div>
                                                {isEditingBasics ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .astro_details
                                                                .rashi
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'astro_details',
                                                                'rashi'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.astro_details.rashi
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
                                                Height:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .height.from
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'height.from'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .height.from
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Age:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="number"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .age.from
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'age.from'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .age.from
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
                                                            profile
                                                                .partner_preference
                                                                .maritial_status
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'maritial_status'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .maritial_status
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Weight:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="number"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .weight.from
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'weight.from'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .weight.from
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
                                                            profile
                                                                .partner_preference
                                                                .have_children
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'have_children'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .have_children
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Height To:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .height.to
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'height.to'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .height.to
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Age To:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="number"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .age.to
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partnerPreference',
                                                                'age.to'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .age.to
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Intercaste:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .intercast
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'intercast'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .intercast
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
                                                            profile
                                                                .partner_preference
                                                                .salary_expectation
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'salary_expectation'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .salary_expectation
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Body Type:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .body_type
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'body_type'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .body_type
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Complexion:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .complexion
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'complexion'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .complexion
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Mangal:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .is_manglik
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'is_manglik'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .is_manglik
                                                )}
                                            </div>
                                        </div>
                                        {/* <div className="flex justify-between">
                                            <div className="font-bold">
                                                Preferred Cities:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
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
                                                    profile.partnerPreference
                                                        .preferredCities
                                                )}
                                            </div>
                                        </div> */}
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Partner Expectations:
                                            </div>
                                            <div>
                                                {isEditingPreferences ? (
                                                    <input
                                                        type="text"
                                                        value={
                                                            profile
                                                                .partner_preference
                                                                .partner_expectaion_details
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                'partner_preference',
                                                                'partner_expectaion_details'
                                                            )
                                                        }
                                                        className="border rounded px-2 py-1"
                                                    />
                                                ) : (
                                                    profile.partner_preference
                                                        .partner_expectaion_details
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
            ) : (
                ''
            )}
        </>
    );
}
interface AstroDetails {
    date_of_birth: string;
    birth_time: string;
    place_of_birth: string;
    rashi: string;
    name_as_rashi: string;
    nakshatra: string;
    gotra: string;
    is_manglik: string;
}

interface BasicInfo {
    first_name: string;
    last_name: string;
    age: number;
    address: string;
    maritial_status: string;
    have_children: string;
    no_of_children: string;
    hobbies_intrest: string;
    about_me: string;
    _id: string;
}

interface DocumentsPhotos {
    profile_image: string;
    astro_profile: string;
    govt_document: string;
    _id: string;
}

interface EducationOccupation {
    qualification: string;
    occupation: string;
    annual_income: string;
    employed_in: string;
    working_with_company: string;
}

interface FamilyDetails {
    father_name: string;
    father_occupation: string;
    mother_name: string;
    mother_occupation: string;
    no_of_brothers: string;
    married_brothers: string;
    no_of_sisters: string;
    married_sisters: string;
    _id: string;
}

interface HeightRange {
    from: number;
    to: number;
    _id: string;
}

interface WeightRange {
    from: number;
    to: number;
    _id: string;
}

interface AgeRange {
    from: number;
    to: number;
    _id: string;
}

interface PartnerPreference {
    height: HeightRange;
    weight: WeightRange;
    age: AgeRange;
    qualification: string;
    salary_expectation: string;
    maritial_status: string;
    have_children: string;
    body_type: string;
    complexion: string;
    intercast: string;
    is_manglik: string;
    partner_expectaion_details: string;
    _id: string;
}

interface PhysicalAttributes {
    height: number;
    weight: number;
    gender: string;
    blood_group: string;
    complexion: string;
    body_type: string;
    spectacles: string;
    smoke: string;
    drink: string;
    diet: string;
    physical_status: string;
    disabled_reason: string;
    _id: string;
}

interface ReligiousSocialBackground {
    religion: string;
    caste: string;
    caste_category: string;
    mother_tongue: string;
    family_status: string;
    family_type: string;
    _id: string;
}

interface ResidenceDetails {
    current_residence: string;
    full_address: string;
    pin_code: string;
    country: string;
    state: string;
    district: string;
    city: string;
    residence_status: string;
    _id: string;
}

interface ProfileDTO {
    _id: string;
    astro_details: AstroDetails;
    basic_info: BasicInfo;
    documents_photos: DocumentsPhotos;
    education_occupation: EducationOccupation;
    family_details: FamilyDetails;
    partner_preference: PartnerPreference;
    physical_attributes: PhysicalAttributes;
    religious_social_background: ReligiousSocialBackground;
    resedence_details: ResidenceDetails;
}

// interface ApiResponse {
//     status: string;
//     data: Profile;
// }
