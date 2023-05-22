import { configureStore, createSlice } from '@reduxjs/toolkit';

const localTheme = localStorage.getItem('theme');
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: localTheme == null ? 'light' : localTheme
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeTheme } = themeSlice.actions

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});