
import { createSlice } from '@reduxjs/toolkit';
import {data } from "@/utils/data"


const initialState = {
  searchQuery: '',
  filteredData: data,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    filterByType(state, action) {
      const type = action.payload;
      if (type === "all") {
        state.filteredData = data; // Show all data if 'all' is selected
      } else {
        state.filteredData = data.filter((item) => item.type === type);
      }
    },
  },
});

export const { setSearchQuery,filterByType } = searchSlice.actions;
export const selectFilteredData = (state) => state.search.filteredData;
export default searchSlice.reducer;