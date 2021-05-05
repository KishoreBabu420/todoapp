import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
        <TodoForm
          submitHandler={submitHandler}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />
        <TodoList
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
