import React from 'react';
import { UserProfile, ViewedProfilesResponse } from './Profile';
import MembersCard from './InnerComponents/MembersCard';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import { getViewHistory } from '../../api';
import MyProfileTabs from '@components/MyProfileTabs/MyProfileTabs';

const MyViewHistory: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [profiles, setProfiles] = React.useState<Array<UserProfile>>();
    const [viewedProfilesResponse, setViewedProfilesResponse] =
        React.useState<ViewedProfilesResponse>();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const getProfiles = async () => {
        const response = await getViewHistory({ pageSize: 100, pageNumber: 1 });
        setViewedProfilesResponse(response);
        setProfiles(response.data);
    };

    React.useEffect(() => {
        if (!isLoaded) {
            getProfiles();
            setIsLoaded(true);
        }
    });

    return (
        <div className="bg-white">
            {viewedProfilesResponse && profiles ? (
                <>
                    <Navbar />
                    <Banner title="My View History" />
                    <MyProfileTabs
                        activeTab="MyViewHistory"
                        balance={`${viewedProfilesResponse?.usedViewedLimit}/${viewedProfilesResponse?.totalViewedLimit}`}
                    ></MyProfileTabs>
                    <div className="mt-4 min-h-screen ">
                        <div className="flex justify-center">
                            <main className="bg-white w-3/4 p-4 grid grid-cols-1 gap-6 main-history">
                                {profiles.map((profile: UserProfile) => (
                                    <MembersCard
                                        key={profile.user_id}
                                        profile={profile}
                                    />
                                ))}
                            </main>
                        </div>

                        <Footer />
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default MyViewHistory;
