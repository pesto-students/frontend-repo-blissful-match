import pooja from '@assets/images/best-tanks-tops-8 1.png';
import blueGirl from '@assets/images/blue girl.png';
import blackTopGirl from '@assets/images/High-Waist-Denim-Shorts-Women-Summer.png';

// Profile interface to define the shape of profile data
export interface Profile {
    id: string;
    name: string;
    age: number;
    qualification: string;
    occupation: string;
    income: string;
    maritalStatus: string;
    location: string;
    height: string;
    caste: string;
    motherTongue: string;
    subCaste?: string;
    imageUrl: string | '*.png';
    isLiked: boolean;
}

// Dummy profile data
export const profiles: Profile[] = [
    {
        id: '123',
        name: 'Pooja L.',
        age: 30,
        qualification: 'MBA',
        occupation: 'Finance Manager',
        income: '45-50 LPA',
        maritalStatus: 'Single',
        location: 'Mumbai',
        height: '5.2',
        caste: 'Punjabi',
        motherTongue: 'Punjabi',
        imageUrl: pooja,
        isLiked: true,
    },
    {
        id: '456',
        name: 'Jayshree',
        age: 38,
        qualification: 'Interior Designing',
        occupation: 'Entrepreneur',
        income: '35-40 LPA',
        maritalStatus: 'Single',
        location: 'Assam',
        height: '5.6',
        caste: 'Assami',
        motherTongue: 'Assami',
        imageUrl: blueGirl,
        isLiked: true,
    },
    {
        id: '789',
        name: 'Raveena T.',
        age: 34,
        qualification: 'Fashion Designing',
        occupation: 'Entrepreneur',
        income: '35-45 LPA',
        maritalStatus: 'Single',
        location: 'Kolkata',
        height: '5.3',
        caste: 'Bengali',
        motherTongue: 'Bangala',
        imageUrl: blackTopGirl,
        isLiked: true,
    },
];
