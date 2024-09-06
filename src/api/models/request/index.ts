export interface SubscriptionPlan {
    _id: string;
    name: string;
    validity: string;
    contact_limit: number;
    show_special_price: boolean;
    website_access: boolean;
    unlimited_profiles: boolean;
    shortlist_profiles: boolean;
    send_messages: boolean;
    advisor: boolean;
    introduction_meetings: boolean;
    handpicked_matches: boolean;
    premium_benefits: boolean;
    status: string;
    updated_at: string; // Use Date type if you're working with Date objects
    created_at: string; // Use Date type if you're working with Date objects
    amount: number;
    special_price: number;
    // __v: number;
}

export interface GenerateOrder {
    plan_id: string;
}

export interface VerifySignatureRequest {
    orderId: string;
    payment_id: string;
    signature: string;
}

export interface SearchCriteria {
    gender: string;
    age: {
        min: number;
        max: number;
    };
    username: string;
    maritial_status: string;
    religion: string;
    caste: string;
    sub_caste: string;
    mother_tounge: string;
    country: string;
    state: string;
    city: string;
    height: {
        min: number;
        max: number;
    };
    education: string;
    mangal: string;
}

export interface SearchRequest {
    currentPage: number;
    pageSize: number;
    search: SearchCriteria;
}
export interface LoginRequest {
    email_address: string;
    password: string;
}
export interface RegisterRequest {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
    religion: string;
    community: string;
    email_address: string;
    mobile: string;
    password: string;
    confirm_password: string;
}
export interface ForgetPasswordRequest {
    email: string;
}
export interface VerifyOtpRequest {
    email: string;
    otp: string;
}
export interface ResetPasswordRequest {
    email: string;
    password: string;
    confirm_password: string;
}
