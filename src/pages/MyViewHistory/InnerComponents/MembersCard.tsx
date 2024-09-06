import React from 'react';
import redHeart from '@assets/svg/RedHeart.svg';
import grayHeart from '@assets/svg/GrayHeart.svg';
import { Profile } from '../Profile';
import { NavLink } from 'react-router-dom';

const MembersCard: React.FC<{ profile: Profile }> = ({
    profile,
}: {
    profile: Profile;
}) => {
    return (
        <div
            key={profile.name}
            className="grid grid-cols-4 h-fit gap-3  my-history"
        >
            <div className="w-auto bg-bm-gray  rounded-lg col-span-1 h-fit ">
                <div className="m-2 flex flex-col items-center">
                    <div className="w-11/12  overflow-hidden grid relative">
                        <img
                            src={profile.imageUrl}
                            alt={profile.name}
                            className="justify-self-center img-hist"
                        />
                        <button
                            type="button"
                            className="absolute top-2 right-1 w-6 h-6"
                        >
                            <img
                                src={profile.isLiked ? redHeart : grayHeart}
                                alt="like"
                            />
                        </button>
                    </div>
                    <div className="w-full ml-7 mt-2">
                        <p>{profile.name}</p>
                        <p>{profile.location}</p>
                    </div>
                    <button className="mt-4 w-11/12 bg-gray-400 text-white py-2 rounded-lg">
                        <NavLink to="/profile/1">View Profile</NavLink>
                    </button>
                </div>
            </div>

            <div className="bg-bm-gray  rounded-lg col-span-3 p-7 h-fit  my-history-description">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-black">
                        <tbody>
                            <tr className="border-gray-200">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium text-2xl col-span-2"
                                >
                                    INFORMATION
                                </td>
                            </tr>
                            <tr className="border-gray-200">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    <p className="font-bold text-xl">Email</p>
                                    <p>{profile.email}</p>
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    <p className="font-bold text-xl">Phone</p>
                                    <p>{profile.phone}</p>
                                </td>
                            </tr>
                            <tr className="border-gray-200 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-2"
                                    colSpan={2}
                                >
                                    <p className="font-bold text-xl">ABOUT</p>
                                    <p className="text-justify">
                                        {profile.about}
                                    </p>
                                </td>
                            </tr>
                            <tr className="border-gray-200 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    <p className="font-bold text-xl">
                                        VIEWED AT
                                    </p>
                                    <p>
                                        Date: {profile.viewedAtDate.toString()}
                                    </p>
                                </td>
                                <td className="px-6 py-2">
                                    <p>&nbsp;</p>
                                    <p>Time: {profile.viewedAtTime}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MembersCard;
