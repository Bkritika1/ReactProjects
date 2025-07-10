// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, removeTodo, toggleTodo } from '../features/todo/todoSlice';
// import './TodoList.css';

// function TodoList() {
//   const [task, setTask] = useState('');
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     if (task.trim() !== '') {
//       dispatch(addTodo(task));
//       setTask('');
//     }
//   };

//   return (
//     <div className="todo-container">
//       <h3>Todo List</h3>
//       <div className="todo-input">
//         <input
//           type="text"
//           placeholder="Add new task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button onClick={handleAdd}>Add</button>
//       </div>
//       <ul className="todo-list">
//         {todos.map((t) => (
//           <li key={t.id} className={t.completed ? 'completed' : ''}>
//             <span onClick={() => dispatch(toggleTodo(t.id))}>{t.text}</span>
//             <button onClick={() => dispatch(removeTodo(t.id))}>x</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todo/todoSlice';
import './TodoList.css';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="todo-wrapper">
      <h3>Todo List</h3>
      <div className="todo-input-box">
        <input
          placeholder="What do you need to do today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span className="checkmark"></span>
            </label>
            <span className="todo-text">{todo.text}</span>
            <FaTimesCircle
              className="delete-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
