import { createSlice } from "@reduxjs/toolkit";

interface ThemeState { 
  value: boolean
}

const initialState: ThemeState = {
  value: true
}

export const themeSlice = createSlice({
  name: 'light',
  initialState,
  reducers: {
    changeTheme: (state) => {
      return {
        value: !state.value
      }
    }
  }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
