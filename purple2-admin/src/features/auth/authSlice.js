import { createSlice } from '@reduxjs/toolkit';



const auth = createSlice({
    name: 'auth',
    initialState : {isLoggedIn :false, userId: null},
    reducers: {
        login: (state, action) =>{
            state.isLoggedIn = true;
            state.userId = action.payload;
        },
        logout:(state, action) =>{
            state.isLoggedIn = false;
            state.userId = null;
        }
    }
});
 
export const {login, logout} = authSlice.actions;
export default  authSlice.reducer;