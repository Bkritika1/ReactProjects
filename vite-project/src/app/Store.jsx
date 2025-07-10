// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import themeReducer from '../features/theme/themeSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import featureFlagsReducer from '../features/features/featuresFlagsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    notifications: notificationReducer,
    features: featureFlagsReducer,
  }
});