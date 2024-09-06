import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/configureStore';

export const loggedInUser = createSelector(
    (state: RootState) => state.LoggedInUser.info,
    (user) => {
        return user;
    }
);
