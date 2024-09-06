export interface UserProfile {
    _id: string;
    first_name: string;
    last_name: string;
    qualification: string;
    occupation: string;
    annual_income: string;
    date_of_birth: string; // ISO date string
    email_address: string;
    mobile: number;
    age: number;
    height: number; // Assuming this is in feet, using number for decimal precision
    religion: string;
    caste: string;
    is_liked: boolean;
    mother_tongue: string;
    full_address: string;
    profile_image: string; // URL as a string
    maritial_status: string; // Typo corrected to 'marital_status'
    status: string;
    updated_at: string; // ISO date string
    created_at: string; // ISO date string
    __v: number;
    gender: string;
}
