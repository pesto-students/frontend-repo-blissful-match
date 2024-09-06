import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

type User = {
    id: string;
    first_name: string;
    last_name: string;
    email_address: string;
    gender: string;
    token: string;
};

export type LoggedInUserState = {
    info: User;
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
        addUser: (state, action: PayloadAction<User>) => {
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
