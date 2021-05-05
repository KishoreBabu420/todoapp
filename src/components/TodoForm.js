import React from 'react';

const TodoForm = ({ submitHandler, todo, setTodo, editId }) => {
  return (
    <form className="formControl" onSubmit={submitHandler}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
