import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import toDosReducer from '../features/toDo/toDoSlice'
import projectReducer from '../features/project/projectSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        toDos: toDosReducer,
        project: projectReducer,
    }
})