import React, { useState } from 'react';

import {
  AiTwotoneTool,
  AiFillCloseSquare,
  AiFillCheckSquare,
} from 'react-icons/ai';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;
  const [modifyStatus, setModifyStatus] = useState(true);
  const [modifyText, setModifyText] = useState(text);
  const handleStatus = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleModifyStatus = () => {
    setModifyStatus(!modifyStatus);
  };
  const handleModifySubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...todo, text: modifyText });
    handleModifyStatus();
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
            checked={status === 'completed'}
            onChange={handleStatus}
          />
          <label htmlFor="checkbox">{text}</label>

          <button onClick={handleDelete}>
            <AiFillCloseSquare size="16px" />
          </button>

          <button onClick={handleModifyStatus}>
            <AiTwotoneTool size="16px" />
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
            onClick={handleModifySubmit}
            disabled={modifyText.trim() !== '' ? false : true}
          >
            <AiFillCheckSquare size="16px" />
          </button>
        </form>
      )}
    </>
  );
};

export default Todo;
