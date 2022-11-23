import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: '장보기', status: 'active' },
    { id: 2, text: '공부하기', status: 'active' },
  ]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };
  const filtered = getFilterdItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((list) => (
          <Todo
            key={list.id}
            todo={list}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} handleAddTodo={handleAddTodo} />
    </section>
  );
};

const getFilterdItems = (todos, filter) => {
  if (filter === 'all') return todos;
  return todos.filter((todo) => todo.status === filter);
};

export default TodoList;
