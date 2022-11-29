import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorag());
  //  const [todos, setTodos] = useState(readTodosFromLocalStorag());
  //  컴포넌트가 리렌더링될때마다 useState도 다시 호출이 되어서 초기값이 다시 전달된다.
  //  useState내부에 이미 업데이트 된 값이 있다면, 초기값을 무시하고 내부적으로 사용하고 있는 값을 사용하게 된다.
  //  함수를 호출해서 데이터를 읽어오거나, storage를 사용하거나, 파일을 읽어오거나 네트워크상에서 데이터를 가져오거나 할 경우 매번 값을 다시 읽어오게된다.
  //  --> 함수를 호출하는 경우 특히 함수 내부의 무거운 일을 수행하는 경우라면, callback함수로 감싸주어야한다.
  //  --> 인자와 호출하는 내용이 동일하다면 함수의 이름(참조값)만 전달해 주셔도 같음
  //      useState(초기화하는함수) // 함수의 레퍼런스만 전달
  //      useState(()=> 초기화하는함수()) // 위와 동일함, 단, 콜백함수를 만듬 (단점을 꼽자면, 불필요한 함수가 만들어 진다는 단점이 있음)

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

const readTodosFromLocalStorag = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const getFilterdItems = (todos, filter) => {
  if (filter === 'all') return todos;
  return todos.filter((todo) => todo.status === filter);
};

export default TodoList;
