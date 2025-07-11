import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
    'project/fetchProjects',
    async (project) => {
        const res = await fetch('/projects')
        return await res.json()
    }
)

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        list: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchToDos.fulfilled, (state, action) => {
                state.status = 'succeed';
                state.list = action.payload;
            })
            .addCase(fetchToDos.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message;
            })
    }

})
 export default projectSlice.reducer;
