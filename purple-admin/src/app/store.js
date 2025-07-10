import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    todo: todoReducer,
  },
});

export default store;