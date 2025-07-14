import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch todos from server
export const fetchToDos = createAsyncThunk(
  'toDos/fetchToDos',
  async () => {
    const res = await fetch('/api/todos');
   return await res.json(); 
  }
);

const toDoSlice = createSlice({
  name: 'toDos',
  initialState: {
    data: [],
    status: 'idle', 
    error: null
  },

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

export const { addTodo, deleteTodo, toggleTodo } = toDoSlice.actions;

export default toDoSlice.reducer;

