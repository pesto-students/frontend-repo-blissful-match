import React, { useState } from 'react';
import redHeart from '@assets/svg/RedHeart.svg';
import grayHeart from '@assets/svg/GrayHeart.svg';
import { Profile } from '../Profile';
import { addToShortList, removeFromShortList } from '../../../api';
import { NavLink } from 'react-router-dom';

const MembersCard: React.FC<{ profile: Profile }> = ({
    profile,
}: {
    profile: Profile;
}) => {
    const [profileState, setProfile] = useState(profile);

    const likeUnlike = () => {
        if (profileState.isLiked) {
            removeFromShortList({
                receiverId: profile.id,
            });
        } else {
            addToShortList({
                receiverId: profile.id,
            });
        }
        setProfile((oldData) => ({ ...oldData, isLiked: !oldData.isLiked }));
    };

    return (
        <div
            key={profileState.name}
            className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4  "
        >
            <div className="w-full bg-bm-gray rounded-lg h-fit mb-4 md:mb-0">
                <div className="m-2 flex flex-col items-center">
                    <div className="w-full overflow-hidden relative card-image">
                        <img
                            src={profileState.imageUrl}
                            alt={profileState.name}
                            className="justify-self-center pro-img"
                        />
                        <button
                            type="button"
                            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100"
                            onClick={likeUnlike}
                        >
                            <img
                                src={
                                    profileState.isLiked ? redHeart : grayHeart
                                }
                                alt="like"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>
                    <div className=" mob-desc w-100">
                        <div className=" list-mem">
                            <div>Name:</div>
                            <div className="fw-bold">{profileState.name}</div>
                        </div>
                        <div className=" list-mem">
                            <div>Age:</div>
                            <div className="fw-bold">{profileState.age}</div>
                        </div>
                        <div className=" list-mem">
                            <div>Marital Status:</div>
                            <div className="fw-bold">
                                {profileState.maritalStatus}
                            </div>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg">
                        <NavLink
                            to={`/member-profile/${profileState.id}`}
                            className="block text-center"
                        >
                            View Profile
                        </NavLink>
                    </button>
                </div>
            </div>

            <div className="bg-bm-gray rounded-lg col-span-1 md:col-span-3 p-4 h-fit mob-des-main">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-black">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-medium">Name</td>
                                <td className="px-4 py-2">
                                    {profileState.name}
                                </td>
                                <td className="px-4 py-2 font-medium">
                                    Height
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.height}
                                </td>
                            </tr>
                            <tr className="border-gray-200">
                                <td className="px-4 py-2 font-medium">Age</td>
                                <td className="px-4 py-2">
                                    {profileState.age}
                                </td>
                                <td className="px-4 py-2 font-medium">Caste</td>
                                <td className="px-4 py-2">
                                    {profileState.caste}
                                </td>
                            </tr>
                            <tr className="border-gray-200">
                                <td className="px-4 py-2 font-medium">
                                    Qualification
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.qualification}
                                </td>
                                <td className="px-4 py-2 font-medium">
                                    Sub Caste
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.subCaste}
                                </td>
                            </tr>
                            <tr className="border-gray-200">
                                <td className="px-4 py-2 font-medium">
                                    Occupation
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.occupation}
                                </td>
                                <td className="px-4 py-2 font-medium">
                                    Mother Tongue
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.motherTongue}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">
                                    Annual Income
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.income}
                                </td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">
                                    Marital Status
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.maritalStatus}
                                </td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">
                                    Location
                                </td>
                                <td className="px-4 py-2">
                                    {profileState.location}
                                </td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MembersCard;
