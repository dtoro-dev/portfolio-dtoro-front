import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  const persistentState = localStorage.getItem(import.meta.env.VITE_REDUX_STATE);
  return persistentState ? JSON.parse(persistentState).pages : [];
})();

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    getPages: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default pagesSlice.reducer;

export const { getPages } = pagesSlice.actions;
