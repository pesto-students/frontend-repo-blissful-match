import React from 'react';
import { Profile, profiles as demoProfiles } from './Profile';
import MembersCard from './InnerComponents/MembersCard';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import { getShortListedUser } from '../../api';
import MyProfileTabs from '@components/MyProfileTabs/MyProfileTabs';

const LikedProfiles: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [profiles, setProfiles] = React.useState(demoProfiles);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!isLoaded) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            getShortListedUser({ pageSize: 100, pageNumber: 1 }).then((res) => {
                // setProfiles(res);
            });

            setIsLoaded(true);
        }
    });

    return (
        <div className="bg-white">
            <Navbar />
            <Banner title="My Liked Profiles" />
            <MyProfileTabs activeTab="MyLikedProfiles"></MyProfileTabs>
            <div className="mt-3 min-h-screen bg-white">
                <div className="flex justify-center  liked">
                    <main className="bg-white w-3/4 p-4 grid grid-cols-1 gap-6 w-cus">
                        {profiles?.map((profile: Profile) => (
                            <MembersCard key={profile.id} profile={profile} />
                        ))}
                    </main>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default LikedProfiles;
