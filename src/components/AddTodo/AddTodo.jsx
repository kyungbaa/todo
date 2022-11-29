import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';
import AlertModal from './AlertModal/AlertModal';
const AddTodo = ({ handleAddTodo }) => {
  const [todoText, setTodoText] = useState('');
  const [textNullAlert, setTextNullAleart] = useState(false);
  const handleInputValue = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') {
      handleNullTextAleart();
      return;
    }
    handleAddTodo({ id: uuidv4(), text: todoText, status: 'active' });
    setTodoText('');
  };

  const handleNullTextAleart = () => {
    setTextNullAleart(!textNullAlert);
    // setTimeout(() => {
    //   setTextNullAleart((textNullAlert) => !textNullAlert);
    // }, 1800);
  };

  return (
    <form className={styles.form}>
      {!!textNullAlert ? <AlertModal /> : null}
      <input
        type="text"
        placeholder="Add Todo"
        value={todoText}
        onChange={handleInputValue}
        className={styles.input}
      ></input>

      <button onClick={handleSubmit} className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
