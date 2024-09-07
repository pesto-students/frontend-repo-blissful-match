import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

export type LoadingState = {
    isLoading: boolean;
};

export const initialLoggedInUserState: LoadingState = {
    isLoading: null,
};

const slice = createSlice({
    name: 'LoggedInUser',
    initialState: initialLoggedInUserState,
    reducers: {
        loadingStarted: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        loadingStopped: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
        },
    },
});

const { reducer } = slice;

export const { loadingStopped, loadingStarted } = slice.actions;

export default reducer;
