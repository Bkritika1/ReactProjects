import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export const fetchToDos  = createAsyncThunk(
    'toDos/fetchToDos',
    async (todo) => {
     const res = await fetch('/todos');
     return await res.json();
    }
);

const toDoSlice = createSlice({
    name: 'toDos',
    initialState :{
        data : [],
        status: 'idle', // pending fullfilledd and rrejected ...
        error: null
    },
    reducers : {}, 
    extraReducers : (builder) => {
        builder
        .addCase(fetchToDos.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchToDos.fulfilled, (state,action) => {
            state.status = 'succeed';
            state.data = action.payload;
        })
        .addCase(fetchToDos.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message;
        })
    }
})
export default toDoSlice.reducer;
