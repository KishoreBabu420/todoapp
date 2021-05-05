import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo('');
      return;
    }
    if (todo !== '') {
      setTodos([{ id: `${todo}--${Date.now()}`, todo }, ...todos]);
    }

    setTodo('');
  };

  const deleteHandler = (id) => {
    const deleteTodo = todos.filter((to) => to.id !== id);
    setTodos([...deleteTodo]);
  };

  const editHandler = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List Application</h1>
        <form className="formControl" onSubmit={submitHandler}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? 'Update' : 'Add'}</button>
        </form>
        <ul className="listControl">
          {todos.map((t) => (
            <li className="listItem" key={t.id}>
              <span className="listTitle">{t.todo}</span>
              <button onClick={() => editHandler(t.id)}>Edit</button>
              <button onClick={() => deleteHandler(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
