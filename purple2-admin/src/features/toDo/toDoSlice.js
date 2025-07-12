import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch todos from server
export const fetchToDos = createAsyncThunk(
  'toDos/fetchToDos',
  async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data.todos;
  }
);

const toDoSlice = createSlice({
  name: 'toDos',
  initialState: {
    data: [],
    status: 'idle', // 'loading' | 'succeed' | 'rejected'
    error: null
  },

  // 👇 These are your local actions (not async)
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.data.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },

  // 👇 Handle async fetch status
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.data = action.payload;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

// 👉 Export local reducers as actions
export const { addTodo, deleteTodo, toggleTodo } = toDoSlice.actions;

// 👉 Export the reducer to use in store
export default toDoSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { data } from "react-router-dom";

// export const fetchToDos  = createAsyncThunk(
//     'toDos/fetchToDos',
//     async (todo) => {
//      const res = await fetch('/todos');
//      return await res.json();
//     }
// );

// const toDoSlice = createSlice({
//     name: 'toDos',
//     initialState :{
//         data : [],
//         status: 'idle', // pending fullfilledd and rrejected ...
//         error: null
//     },
//     reducers : {}, 
//     extraReducers : (builder) => {
//         builder
//         .addCase(fetchToDos.pending, (state) =>{
//             state.status = 'loading';
//         })
//         .addCase(fetchToDos.fulfilled, (state,action) => {
//             state.status = 'succeed';
//             state.data = action.payload;
//         })
//         .addCase(fetchToDos.rejected, (state, action) => {
//             state.status = 'rejected'
//             state.error = action.error.message;
//         })
//     }
// })
// export default toDoSlice.reducer;
