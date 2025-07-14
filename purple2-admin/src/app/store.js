import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import toDosReducer from '../features/toDo/toDoSlice'
import projectReducer from '../features/project/projectSlice'
import updatesReducer from '../features/updates/updateSlice'
import ticketReducer from '../features/ticket/ticketSlice'
import visitStatsReducer from '../features/visitstatus/visitStatsSlice'
import trafficReducer from '../features/trafficsource/trafficSourceSlice'
import   statsReducer from '../features/stats/statsSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
          stats: statsReducer,
        visitStats: visitStatsReducer,
        traffic: trafficReducer,
        toDos: toDosReducer,
        project: projectReducer,
        updates: updatesReducer,
        tickets: ticketReducer
    }
})