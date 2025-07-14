import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
    'project/fetchProjects',
    async (project) => {
        const res = await fetch('api/projects')
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
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeed';
                state.list = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message;
            })
    }

})
 export default projectSlice.reducer;
















// function Ticket(str1){
//   let result ="";
//   let i = 0;

//   while(i < str1.length){
//     if(str1[i] === 'E' && str1[i+1] === 'F'){
//       i += 2;
//     }
//     else if(str1[i] === '5'  && str1[i+1] === '6'){
//       i += 2;
//     }
//     else if(str1[i] === 'G'){
//       i += 1;
//     }
//     else{
//       result += str1[i];
//       i += 1;
//     }
//   }
//   return result;
// }

// const input = '2323EF58G';
// console.log(Ticket(input));
// Yash Rajput
// 23:44
// Write a C++ program to count how many even and odd numbers are present in the array.
// Write a C++ program to find the maximum element in an array of n integers.
// Write a program to reverse an array in-place (no extra array).
// Write a program that counts how many times each number appears in the array.
// Write a program to find the second largest element in an array.
// No sorting allowed. Use only one loop if possible.
// Write a C++ program to check if an array is sorted in ascending order.
