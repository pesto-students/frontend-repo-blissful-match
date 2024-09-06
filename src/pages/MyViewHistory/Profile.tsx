import pooja from '@assets/images/best-tanks-tops-8 1.png';
import blueGirl from '@assets/images/blue girl.png';
import blackTopGirl from '@assets/images/High-Waist-Denim-Shorts-Women-Summer.png';

// Profile interface to define the shape of profile data
export interface Profile {
    email: string;
    phone: string;
    about: string;
    viewedAtDate: Date | string;
    viewedAtTime: string;
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
        email: 'example@abc.com',
        phone: '1234567809',
        about: `I'm a 30-year-old finance manager with a BBA and MBA. I love balancing my professional life with my passion for cooking, reading, and watching movies—especially romantic and horror genres. Music is my go-to for relaxation and fun.
I'm seeking a partner who is kind, responsible, and understanding, someone who appreciates the little joys in life and values mutual respect in a relationship. If you share these values and are looking for a meaningful connection, I'd love to get to know you better.`,
        viewedAtDate: '24-09-2024',
        viewedAtTime: '4:00 pm',
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
        email: 'example@abc.com',
        phone: '1234567809',
        about: `At 38, I have established a fulfilling career in interior design with my own startup, and I value the importance of good nature, responsibility, and meaningful connections. I cherish time spent with friends and find joy in music. Now, I'm seeking a partner who shares similar values—someone who is good-natured, understanding, and responsible. It's important to me to find someone who appreciates the balance of personal growth, mutual respect, and companionship. I believe a strong relationship is built on these foundations, and I'm ready to embark on this journey with someone who shares this vision.`,
        viewedAtDate: '24-09-2024',
        viewedAtTime: '4:00 pm',
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
        isLiked: false,
    },
    {
        id: '789',
        name: 'Raveena T.',
        email: 'example@abc.com',
        phone: '1234567809',
        about: `I'm a 34-year-old fashion designer with a master's degree and my own boutique. Creativity is at the heart of everything I do, whether it's designing clothes or crafting DIY projects from waste materials. In my free time, I enjoy listening to music and cherishing moments with friends and family.
I'm seeking a partner who is romantic, understanding, and appreciates the beauty in transforming the ordinary into something extraordinary. If you value creativity, connection, and the joy of making something new from the old, I'd love to connect with you`,
        age: 34,
        viewedAtDate: '24-09-2024',
        viewedAtTime: '4:00 pm',
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
