import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl font-bold mb-4">Todo List</div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center text-white text-left bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-md mb-2"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-4 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
