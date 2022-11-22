import React from "react";

const Todo = () => {
  return (
    <div>
      <ul>
        {TODOLIST.map((list) => {
          return <li key={list.id}>{list.todo}</li>;
        })}
      </ul>
    </div>
  );
};

const TODOLIST = [
  { id: 1, todo: "장보기" },
  { id: 1, todo: "장보기" },
];
export default Todo;
