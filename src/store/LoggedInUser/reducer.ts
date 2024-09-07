import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

interface UserProfile {
    education_occupation: {
        qualification: string;
        occupation: string;
        annual_income: string;
        employed_in: string;
        working_with_company: string;
    };
    astro_details: {
        date_of_birth: string;
        birth_time: string;
        place_of_birth: string;
        rashi: string;
        name_as_rashi: string;
        nakshatra: string;
        gotra: string;
        is_manglik: string;
    };
    _id: string;
    documents_photos: {
        profile_image: string;
        astro_profile: string;
        govt_document: string;
        _id: string;
    };
    family_details: {
        father_name: string;
        father_occupation: string;
        mother_name: string;
        mother_occupation: string;
        no_of_brothers: string;
        married_brothers: string;
        no_of_sisters: string;
        married_sisters: string;
        _id: string;
    };
    partner_preference: {
        height: {
            from: number;
            to: number;
            _id: string;
        };
        weight: {
            from: number;
            to: number;
            _id: string;
        };
        age: {
            from: number;
            to: number;
            _id: string;
        };
        qualification: string;
        salary_expectation: string;
        maritial_status: string;
        have_children: string;
        body_type: string;
        complexion: string;
        intercast: string;
        is_manglik: string;
        partner_expectaion_details: string;
        _id: string;
    };
    resedence_details: {
        current_residence: string;
        full_address: string;
        pin_code: string;
        country: string;
        state: string;
        district: string;
        city: string;
        residence_status: string;
        _id: string;
    };
    basic_info: {
        first_name: string;
        last_name: string;
        email_address: string;
        mobile: number;
        maritial_status: string;
        have_children: string;
        no_of_children: string;
        hobbies_intrest: string;
        about_me: string;
        _id: string;
    };
    physical_attributes: {
        gender: string;
        _id: string;
    };
    religious_social_background: {
        religion: string;
        caste: string;
        _id: string;
    };
    status: string;
    updated_at: string;
    created_at: string;
    __v: number;
    token: string;
}

// type User = {
//     id: string;
//     first_name: string;
//     last_name: string;
//     email_address: string;
//     gender: string;
//     token: string;
// };

export type LoggedInUserState = {
    info: UserProfile;
    token: string;
};

export const initialLoggedInUserState: LoggedInUserState = {
    info: null,
    token: null,
};

const slice = createSlice({
    name: 'LoggedInUser',
    initialState: initialLoggedInUserState,
    reducers: {
        addUser: (state, action: PayloadAction<UserProfile>) => {
            console.log(action.payload);
            state.info = action.payload;
            state.token = action.payload.token;
            const info = { ...action.payload, token: undefined };
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(info));
            localStorage.setItem('token', action.payload.token);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        logOut: (state, action: PayloadAction<string>) => {
            state.info = null;
            state.token = null;
            localStorage.clear();
        },
    },
});

const { reducer } = slice;

export const { addUser, logOut } = slice.actions;

export default reducer;
