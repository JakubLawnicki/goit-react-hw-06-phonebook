import { createSlice } from '@reduxjs/toolkit';

const filterInitState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    updateFilter(state, action) {
      state = action.payload;
    },
  },
});

export const updateFilter = filterSlice.actions;
export const filterReducer = filterSlice.reducer;