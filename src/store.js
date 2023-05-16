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

const navSlice  = createSlice({
  name: "activePage",
  initialState: "/",
  reducers: {
    setActivePage: (state, action) => {
      state = action.payload
    }
  }
})

export const { changeTheme } = themeSlice.actions
export const { setActivePage } = navSlice.actions

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    activePage: navSlice.reducer,
  },
});