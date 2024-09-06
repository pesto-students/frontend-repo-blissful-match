import { Profile } from '../../pages/Members/Profile';
import { UserProfile } from '../models';
export function MapUserProfileToProfile(profile: UserProfile): Profile {
    return {
        id: profile._id,
        name: profile.first_name + ' ' + profile.last_name,
        age: profile.age,
        qualification: profile.qualification,
        occupation: profile.occupation,
        income: profile.annual_income,
        maritalStatus: profile.maritial_status,
        location: profile.full_address,
        height: profile.height.toString(),
        caste: profile.religion,
        motherTongue: profile.mother_tongue,
        subCaste: profile.caste,
        imageUrl: profile.profile_image,
        isLiked: profile.is_liked,
    };
}

export function MapUserProfilesToProfiles(
    profiles: Array<UserProfile>
): Array<Profile> {
    return profiles.map((profile) => {
        return {
            id: profile._id,
            name: profile.first_name + ' ' + profile.last_name,
            age: profile.age,
            qualification: profile.qualification,
            occupation: profile.occupation,
            income: profile.annual_income,
            maritalStatus: profile.maritial_status,
            location: profile.full_address,
            height: profile.height?.toString(),
            caste: profile.religion,
            motherTongue: profile.mother_tongue,
            subCaste: profile.caste,
            imageUrl: profile.profile_image,
            isLiked: profile.is_liked,
        };
    });
}
