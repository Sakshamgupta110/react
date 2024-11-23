import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
  const [isEditing, setIsEditing] = useState(null);
  const [newText, setNewText] = useState('');
  const handleEditClick = (todo) => {
    setIsEditing(todo.id);
    setNewText(todo.text);
  };

  const handleSaveClick = (id) => {
    dispatch(updateTodo({ id, text: newText }));
    setIsEditing(null);
    setNewText('');
  };

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
            {isEditing === todo.id ? (
                // If editing, show an input field to update the todo
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)} // Update the new text
                    className="px-2 py-1 text-black"
                />
            ) : (
                // If not editing, show the text
                <span>{todo.text}</span>
            )}

            {isEditing === todo.id ? (
                // Show Save button when editing
                <button onClick={() => handleSaveClick(todo.id)} className="ml-4 bg-green-500 text-white px-3 py-1 rounded">
                    Save
                </button>
            ) : (
                <>
                    {/* Show Edit button when not editing */}
                    <button 
                        onClick={() => setIsEditing(todo.id)}  // Start editing this todo
                        className="ml-4 bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Edit
                    </button>
                    {/* Show Remove button */}
                    <button 
                        onClick={() => dispatch(removeTodo(todo.id))}  // Remove the todo
                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Remove
                    </button>
                </>
            )}
        </li>
    ))}
</ul>

    </>
  );
}

export default Todo;
