// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import { postsApi } from '../features/posts/postApiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});



// UI (user clicks something)
//    ↓
// 2. Dispatch an ACTION
//    ↓
// 3. Reducer receives the action
//    ↓
// 4. Reducer updates the STATE
//    ↓
// 5. UI re-renders with new STATE


// Concept	Purpose	Example
// Store	Centralized state	configureStore()
// State	Actual data	{ count: 0 }
// Action	What happened	{ type: 'increment' }
// Reducer	How state changes	state.count++
// Dispatch	Send action to reducer	dispatch(increment())
// useSelector	Read state in component	useSelector()
// useDispatch	Send actions from component	useDispatch()
// Slice	Toolkit way of grouping state + actions	createSlice()

