import React from 'react';

const TodoList = ({ todos, editHandler, deleteHandler }) => {
  return (
    <ul className="listControl">
      {todos.map((t) => (
        <li className="listItem" key={t.id}>
          <span className="listTitle">{t.todo}</span>
          <button onClick={() => editHandler(t.id)}>Edit</button>
          <button onClick={() => deleteHandler(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
