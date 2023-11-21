import { createSlice } from '@reduxjs/toolkit';

const filterInitState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducer: {
    updateFilter: {},
  },
});

export const updateFilter = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
