// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({     // to create slices 
  name: 'auth',
  initialState: { isLoggedIn: false, userId: null }, // for intialization
  reducers: {                      // for chnging the initial data 
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;