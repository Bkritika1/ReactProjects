// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todo",
//   initialState: {
//     todos: []
//   },
//   reducers: {
//     addTodo: {
//       reducer(state, action) {
//         state.todos.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             id: nanoid(),
//             text,
//             completed: false
//           }
//         };
//       }
//     },
//     removeTodo(state, action) {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     },
//     toggleTodo(state, action) {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     }
//   }
// });

// export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
// export default todoSlice.reducer;


import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: nanoid(), text: 'Pick up kids from school', completed: false },
    { id: nanoid(), text: 'Prepare for presentation', completed: true },
    { id: nanoid(), text: 'Print Statements', completed: false },
    { id: nanoid(), text: 'Create invoice', completed: false },
    { id: nanoid(), text: 'Call John', completed: true },
    { id: nanoid(), text: 'Meeting with Alisa', completed: false },
  ]
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.unshift(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false
          }
        };
      }
    },
    toggleTodo(state, action) {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
