import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  const persistentState = localStorage.getItem(import.meta.env.VITE_REDUX_STATE);
  return persistentState ? JSON.parse(persistentState).theme : { mode: "light" };
})();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
});

export default themeSlice.reducer;

export const { changeMode } = themeSlice.actions;
