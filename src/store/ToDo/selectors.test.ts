/* eslint-disable @typescript-eslint/no-explicit-any */
import reducer from './reducer';
import { selectAllTasks } from './selectors';

describe('test selectAllTasks', () => {
    it('should return all tasks', () => {
        const newTask = {
            id: '12345',
            name: 'my task',
            completed: false,
        };

        const state = reducer(
            {
                tasks: {
                    byId: {
                        [newTask.id]: newTask,
                    },
                    ids: [newTask.id],
                },
            },
            {} as any
        );

        const allTasks = selectAllTasks({
            ToDo: state,
            LoggedInUser: {
                info: {
                    education_occupation: {
                        qualification: 'MBA',
                        occupation: 'ARCHITECT',
                        annual_income: '14-16 Lakhs',
                        employed_in: 'PRIVATE SECTOR',
                        working_with_company: 'Google India Limited',
                    },
                    astro_details: {
                        date_of_birth: '2000-08-08T00:00:00.000Z',
                        birth_time: '5:46 AM',
                        place_of_birth: 'Delhi',
                        rashi: 'ARIES (MESH)',
                        name_as_rashi: 'Ansh',
                        nakshatra: 'ASHVINI',
                        gotra: 'Gehlot',
                        is_manglik: 'No',
                    },
                    _id: '66dbbcac8ed0596b47d1dad3',
                    documents_photos: {
                        profile_image:
                            'https://media.istockphoto.com/id/2083393992/photo/radiant-young-woman-with-curly-brown-hair-outdoors.jpg?b=1&s=612x612&w=0&k=20&c=mgoLW9kRAihtOCx1R5CNHhTZurqSTQWKZREOVjU-Ft8=',
                        astro_profile:
                            'https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file-sample_150kB.pdf',
                        govt_document:
                            'https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file-sample_150kB.pdf',
                        _id: '66d881387c54a8eea4b9058c',
                    },
                    family_details: {
                        father_name: 'Ramesh Kumar',
                        father_occupation: 'Business',
                        mother_name: 'Prinka',
                        mother_occupation: 'Service-Private',
                        no_of_brothers: '2',
                        married_brothers: '1',
                        no_of_sisters: '1',
                        married_sisters: '1',
                        _id: '66d881387c54a8eea4b9058a',
                    },
                    partner_preference: {
                        height: {
                            from: 5.1,
                            to: 6.5,
                            _id: '66d881387c54a8eea4b90586',
                        },
                        weight: {
                            from: 65,
                            to: 70,
                            _id: '66d881387c54a8eea4b90587',
                        },
                        age: {
                            from: 28,
                            to: 35,
                            _id: '66d881387c54a8eea4b90588',
                        },
                        qualification: 'BBA',
                        salary_expectation: '14-16 Lakhs',
                        maritial_status: 'UNMARRIED',
                        have_children: 'No',
                        body_type: 'SLIM',
                        complexion: 'VERY FAIR',
                        intercast: 'Yes',
                        is_manglik: 'Yes',
                        partner_expectaion_details:
                            'Expect regular and honest communication about feelings, thoughts, and concerns,Seek someone who is dependable and keeps their promises,Desire a partner who respects your individuality, boundaries, and opinions',
                        _id: '66d881387c54a8eea4b90585',
                    },
                    resedence_details: {
                        current_residence:
                            'Home Plaza Complex, 3rd Floor, Colony Bazaar, AK Azad Rd, opp. Indusland Bank, Kala Pahar, Guwahati, Assam 781018, India',
                        full_address:
                            'RK Mission Rd, Bishnu Rabha Nagar, Birubari,  Guwahati, Assam 781016, India',
                        pin_code: '781016',
                        country: 'India',
                        state: 'Assam',
                        district: 'Kamrup Metropolitan',
                        city: 'Guwahati',
                        residence_status: 'FAMILY OWNED',
                        _id: '66d881387c54a8eea4b90589',
                    },
                    basic_info: {
                        first_name: 'Anil',
                        last_name: 'Saini',
                        email_address: 'anilmsaini@gmail.com',
                        mobile: 8690415676,
                        maritial_status: 'UNMARRIED',
                        have_children: 'Yes, living together',
                        no_of_children: '2',
                        hobbies_intrest:
                            'Gardening, Photography,Learning a Musical Instrument',
                        about_me:
                            "Hello! I'm Anil, and I'm excited to share a little bit about myself. I'm a 'graphic designer' with a passion for 'creativity'.",
                        _id: '66dbbcac8ed0596b47d1dad4',
                    },
                    physical_attributes: {
                        gender: 'Male',
                        _id: '66dbbcac8ed0596b47d1dad5',
                    },
                    religious_social_background: {
                        religion: '66c17caddbd55f67967501ed',
                        caste: '66c18e4385ed11479b6d611e',
                        _id: '66dbbcac8ed0596b47d1dad6',
                    },
                    status: 'Active',
                    updated_at: '2024-09-07T02:38:36.116Z',
                    created_at: '2024-09-07T02:38:36.116Z',
                    __v: 0,
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGJiY2FjOGVkMDU5NmI0N2QxZGFkMyIsImlhdCI6MTcyNTY5MTI0NywiZXhwIjoxNzMzNDY3MjQ3fQ.-k3JS4YmOyOjuwklbino3oZx9OsGYV-Xw-5qbCDUjK8',
                },
                token: '',
            },
            IsLoading: {
                isLoading: false,
            },
        });

        expect(allTasks.length).toBe(1);
        expect(allTasks[0]).toMatchObject(newTask);
    });
});
