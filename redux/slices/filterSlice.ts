// src/redux/slices/filterSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  filters: Record<string, string[]>;
}

const initialState: FilterState = {
  filters: {},
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<Record<string, string[]>>) {
      state.filters = action.payload;
    },
    clearFilters(state) {
      state.filters = {};
    },
  },
});

export const { updateFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
