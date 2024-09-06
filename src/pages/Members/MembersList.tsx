import React from 'react';
import MembersListFilter from './InnerComponents/MembersListFilter';
import { Profile, profiles } from './Profile';
import MembersCard from './InnerComponents/MembersCard';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';

const MembersList: React.FC = () => {
    const [profilesList, setProfiles] =
        React.useState<Array<Profile>>(profiles);

    const onListUpdate = (newProfiles: Array<Profile>) => {
        setProfiles(newProfiles);
    };

    return (
        <>
            <Navbar />
            <Banner title="Members" />
            <div className="min-h-screen bg-white">
                <header className="bg-bm-primary p-4 flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-2 sm:mb-0">
                        <p className="text-black font-bold">
                            {profilesList?.length ?? 0} profiles matched
                        </p>
                    </div>
                    <div className="flex space-x-4 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search profiles..."
                            className="px-4 py-2 border-none bg-transparent w-full sm:w-auto focus:border focus:border-b-2 focus:border-gray-300 focus:bg-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mt-2 sm:mt-0">
                        <button className="bg-bm-secondary text-white px-4 py-2 rounded-lg w-full sm:w-auto">
                            Sort: Age
                        </button>
                    </div>
                </header>

                <div className="flex flex-col-reverse sm:flex-row">
                    <aside className="w-full sm:w-1/4 p-4">
                        <MembersListFilter onListUpdate={onListUpdate} />
                    </aside>

                    <main className="bg-white h-auto w-full sm:w-3/4 p-4 flex flex-col gap-6">
                        {profilesList.map((profile: Profile) => (
                            <MembersCard key={profile.id} profile={profile} />
                        ))}
                    </main>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default MembersList;
