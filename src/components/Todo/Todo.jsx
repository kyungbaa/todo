import React, { useState } from "react";

import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;
  const [modifyStatus, setModifyStatus] = useState(true);
  const [modifyText, setModifyText] = useState(text);
  const handleStatus = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleModifyStatus = () => {
    setModifyStatus(!modifyStatus);
  };
  const handleModify = () => {
    console.log("ddd");
    // onUpdate({ ...todo, text: modifyText });
  };

  const handleModifyText = (e) => {
    setModifyText(e.target.value);
  };
  return (
    <>
      {modifyStatus ? (
        <li>
          <input
            type="checkbox"
            id="checkbox"
            checked={status === "completed"}
            onChange={handleStatus}
          />
          <label htmlFor="checkbox">{text}</label>

          <button onClick={handleDelete}>
            <AiTwotoneDelete size="20px" />
          </button>

          <button onClick={handleModifyStatus}>
            <AiFillEdit size="20px" />
          </button>
        </li>
      ) : (
        <form>
          <input
            type="text"
            onChange={handleModifyText}
            defaultValue={text}
          ></input>
          <button
            onClick={handleModify}
            disabled={modifyText.trim() !== "" ? false : true}
          >
            <AiFillEdit />
          </button>
        </form>
      )}
    </>
  );
};

export default Todo;
