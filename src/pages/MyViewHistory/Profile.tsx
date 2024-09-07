export interface UserProfile {
    viewed_at_date: string;
    viewed_at_time: string;
    created_at: string;
    user_id: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
    religion: string;
    email_address: string;
    mobile: number;
    qualification: string;
    annual_income: string;
    caste: string;
    full_address: string;
    location: string;
    about_me: string;
    profile_image: string;
    maritial_status: string;
    status: string;
}

export interface ViewedProfilesResponse {
    status: string;
    totalViewedLimit: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    usedViewedLimit: number;
    data: UserProfile[];
}

// export const viewHistoryData: ViewedProfilesResponse = {
//     status: 'success',
//     totalViewedLimit: 110,
//     usedViewedLimit: 96,
//     data: [
//         {
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '06:17 AM',
//             created_at: '2024-09-07T06:17:28.715Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '06:03 AM',
//             created_at: '2024-09-07T06:03:49.612Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '11:10 AM',
//             created_at: '2024-09-07T05:40:26.121Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '11:09 AM',
//             created_at: '2024-09-07T05:39:59.811Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '11:09 AM',
//             created_at: '2024-09-07T05:39:18.942Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '11:07 AM',
//             created_at: '2024-09-07T05:37:59.022Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             viewed_at_date: '2024-07-07',
//             viewed_at_time: '10:52 AM',
//             created_at: '2024-09-07T05:22:20.213Z',
//             user_id: '66dbc1748ed0596b47d1db82',
//             first_name: 'Neha',
//             last_name: 'Joshi',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'neha@malinator.com',
//             mobile: 8690415699,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-09-05T19:07:18.412Z',
//             viewed_at_date: '2024-09-07',
//             viewed_at_time: '11:52 AM',
//             user_id: '66dbc1508ed0596b47d1db74',
//             first_name: 'Sanya',
//             last_name: 'Mehta',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'sanya@malinator.com',
//             mobile: 8690415697,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-09-05T19:05:50.508Z',
//             viewed_at_date: '2024-08-12',
//             viewed_at_time: '09:52 AM',
//             user_id: '66dbc1398ed0596b47d1db6d',
//             first_name: 'Tanya',
//             last_name: 'Gupta',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'tanya@malinator.com',
//             mobile: 8690415696,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-09-05T18:51:13.620Z',
//             viewed_at_date: '2024-09-01',
//             viewed_at_time: '07:52 AM',
//             user_id: '66dbc1278ed0596b47d1db66',
//             first_name: 'Ritika',
//             last_name: 'Singh',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'ritika@malinator.com',
//             mobile: 8690415695,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-08-31T18:20:04.765Z',
//             viewed_at_date: '2024-02-07',
//             viewed_at_time: '05:75 AM',
//             user_id: '66dbc0ad8ed0596b47d1db3c',
//             first_name: 'Aarohi',
//             last_name: 'Patel',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'aarohi@malinator.com',
//             mobile: 8690415690,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-08-31T18:20:04.765Z',
//             viewed_at_date: '2024-04-21',
//             viewed_at_time: '10:52 AM',
//             user_id: '66dbc0c18ed0596b47d1db43',
//             first_name: 'Meera',
//             last_name: 'Sharma',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'meera@malinator.com',
//             mobile: 8690415691,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-08-31T18:20:04.765Z',
//             viewed_at_date: '2024-03-21',
//             viewed_at_time: '11:52 AM',
//             user_id: '66dbc0d58ed0596b47d1db4a',
//             first_name: 'Isha',
//             last_name: 'Desai',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'isha@malinator.com',
//             mobile: 8690415692,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//         {
//             created_at: '2024-08-31T18:20:04.765Z',
//             viewed_at_date: '2024-04-18',
//             viewed_at_time: '04:52 AM',
//             user_id: '66dbc0fd8ed0596b47d1db58',
//             first_name: 'Kavya',
//             last_name: 'Nair',
//             date_of_birth: '2000-08-08T00:00:00.000Z',
//             gender: 'Female',
//             religion: '66c17caddbd55f67967501ed',
//             email_address: 'kavya@malinator.com',
//             mobile: 8690415694,
//             qualification: 'MBA',
//             annual_income: '14-16 Lakhs',
//             caste: '66c18e4385ed11479b6d611e',
//             full_address:
//                 'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
//             profile_image:
//                 'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
//             maritial_status: 'UNMARRIED',
//             status: 'Active',
//         },
//     ],
//     totalPages: 1,
//     currentPage: 1,
//     pageSize: 100,
// };
