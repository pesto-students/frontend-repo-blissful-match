import React from 'react';
import { NavLink } from 'react-router-dom';

const MyProfileTabs: React.FC<{ activeTab: string; balance?: string }> = ({
    activeTab = 'MyProfile',
    balance = undefined,
}) => {
    return (
        <div className="bg-bm-primary flex justify-between items-center w-full">
            <span className="text-start">
                <ul className="inline-flex">
                    <li
                        className={`${
                            activeTab === 'MyProfile'
                                ? `bg-bm-secondary text-white`
                                : ``
                        } p-4`}
                    >
                        <NavLink to={'/my-profile'}>My Profile</NavLink>
                    </li>
                    <li
                        className={`${
                            activeTab === `MyViewHistory`
                                ? `bg-bm-secondary text-white`
                                : ``
                        } p-4`}
                    >
                        <NavLink to={'/my-view-history'}>
                            My View History
                        </NavLink>
                    </li>
                    <li
                        className={`${
                            activeTab === `MyLikedProfiles`
                                ? `bg-bm-secondary text-white`
                                : ``
                        } p-4`}
                    >
                        <NavLink to={'/liked-profiles'}>
                            My Liked Profiles
                        </NavLink>
                    </li>
                </ul>
            </span>
            <span className="mx-8 text-bm-secondary font-bold my-auto text-end">
                {balance ? <p>BALANCE: {balance}</p> : ''}
            </span>
        </div>
    );
};

export default MyProfileTabs;
