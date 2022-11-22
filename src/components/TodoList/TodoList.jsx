import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
// import { RiDeleteBinFill } from "react-icons/ri";
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "장보기", status: "active" },
    { id: 2, text: "공부하기", status: "active" },
  ]);
  console.log(todos);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <section>
      <ul>
        {todos.map((list) => (
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

export default TodoList;
