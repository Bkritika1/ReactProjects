
// components/TodoList.jsx
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchToDos, toggleTodo,
  deleteTodo, addTodo
} from '../features/toDo/toDoSlice';
import './TodoList.css'

const TodoList = () => {
  const dispatch = useDispatch();
 const { data: items = [], status } = useSelector(state => state.toDos);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  const handleAdd = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        task: input,
        completed: false
      };
      dispatch(addTodo(newTodo));
      setInput("");
    }
  };

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className='todo-list'>
      <h2>Todo List</h2>
      <div className='todo-input'>
        <input
          type='text'
          placeholder='What do you need to do today...?'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "10px"
            }}>
              {todo.task}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     fetchToDos, toggleTodo,
//     deleteTodo,
//     addTodo
// } from '../features/toDo/toDoSlice';



// const TodoList = () => {
//     const dispatch = useDispatch();
//     const { items, status } = useSelector(state => state.todos);


//     const [input, setInput] = useState("");


//     useEffect(() => {
//         dispatch(fetchToDos());
//     }, [dispatch]);

//     const handleAdd = () => {
//         if (input.trim()) {
//             dispatch(addTodo(input))
//             setInput("");
//         }
//     };
//     if (status === 'loading') return <p>Loading....</p>
//     return (
//         <div className='todo-list'>
//             <h2>Todo List</h2>
//             <div className='todo-input'>
//                 <input
//                     type='text'
//                     placeholder='what do you need to do today..?'
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                 />
//                 <button onClick={handleAdd}>Add</button>
//             </div>
//             <ul>
//                 {items.map((todo, index) => (
//                     <li key={todo.id}>
//                         <input
//                             type='checkbox'
//                             checked={todo.completed}
//                             onChange={() => dispatch(toggleTodo(todo.id))}
//                         />
//                         <span style={{
//                             textDecoration: todo.completed ? "line-through" : "none",
//                             marginLeft: "10px",
//                             flex: 1
//                         }}>
//                             {todo.task}
//                         </span>
//                         <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
//                     </li>
//                 ))}
//             </ul>

//         </div>
//     );

// };
// export default TodoList;