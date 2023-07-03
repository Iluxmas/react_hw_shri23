import { FilterState } from '@/types/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FilterState = { isLoaded: false, filtered: [] }

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFiltered: (state, { payload }) => {
      state.filtered = payload;
      return;
    },
    setLoaded: (state, { payload }) => {
      state.isLoaded = payload;
      return;
    }
  }
})

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;