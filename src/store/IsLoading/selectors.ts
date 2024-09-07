import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/configureStore';

export const isLoading = createSelector(
    (state: RootState) => state.IsLoading.isLoading,
    (isLoading) => {
        return isLoading;
    }
);
