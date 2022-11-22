import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ handleAddTodo }) => {
  const [todoText, setTotoText] = useState("");
  const [textNullAlert, setTextNullAleart] = useState(false);
  const handleInputValue = (e) => {
    setTotoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") {
      handleNullTextAleart();
      return;
    }
    handleAddTodo({ id: uuidv4(), text: todoText, status: "active" });
    setTotoText("");
  };

  const handleNullTextAleart = () => {
    setTextNullAleart(!textNullAlert);
    setTimeout(() => {
      setTextNullAleart((textNullAlert) => !textNullAlert);
    }, 1000);
  };

  return (
    <form>
      {!!textNullAlert ? <p>텍스트를 적어주세요.</p> : null}
      <input
        type="text"
        placeholder="Add Todo"
        value={todoText}
        onChange={handleInputValue}
      ></input>

      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddTodo;
