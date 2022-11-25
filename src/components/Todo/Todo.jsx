import React, { useState } from 'react';
import {
  AiTwotoneTool,
  AiFillCloseSquare,
  AiFillCheckSquare,
} from 'react-icons/ai';
import { RiDeleteBin2Fill, RiEditFill } from 'react-icons/ri';
import { ImCheckmark } from 'react-icons/im';
import { TiCancel } from 'react-icons/ti';
import styles from './Todo.module.css';
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

  const handleCancel = (e) => {
    e.preventDefault();
    handleModifyStatus();
  };
  return (
    <>
      {modifyStatus ? (
        <li className={styles.todo}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="checkbox"
            checked={status === 'completed'}
            onChange={handleStatus}
          />
          <label className={styles.text} htmlFor="checkbox">
            {text}
          </label>
          <div className={styles.buttons}>
            <span className={styles.icon}>
              <button
                onClick={handleModifyStatus}
                className={styles.todoButton}
              >
                <RiEditFill size="18px" />
              </button>
            </span>
            <span className={styles.icon}>
              <button onClick={handleDelete} className={styles.todoButton}>
                <RiDeleteBin2Fill size="18px" />
              </button>
            </span>
          </div>
        </li>
      ) : (
        <form className={styles.todoform}>
          <input
            type="text"
            onChange={handleModifyText}
            defaultValue={text}
            className={styles.input}
          ></input>
          <div className={styles.buttons}>
            <span className={styles.icon}>
              <button
                className={styles.todoButton}
                onClick={handleModifySubmit}
                disabled={modifyText.trim() !== '' ? false : true}
              >
                <ImCheckmark size="14px" />
              </button>
            </span>
            <span className={styles.icon}>
              <button
                className={styles.todoButton}
                onClick={handleCancel}
                disabled={modifyText.trim() !== '' ? false : true}
              >
                <TiCancel size="22px" />
              </button>
            </span>
          </div>
        </form>
      )}
    </>
  );
};

export default Todo;
