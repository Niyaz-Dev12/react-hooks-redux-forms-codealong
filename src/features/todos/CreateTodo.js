import React, { useState } from 'react';
import { todoAdded } from './todosSlice';
import { useSelector, useDispatch } from 'react-redux';
function CreateTodo() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.entities);
  const dispatch = useDispatch();
  console.log(todos);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAdded(text));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text} />
        </p>
        <input type="submit" />
      </form>
      <p>{todos.map((todo) => todo)}</p>
    </div>
  );
}

export default CreateTodo;
