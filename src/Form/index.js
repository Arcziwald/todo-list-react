import React, { useState, useRef } from "react";
import { TaskForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <TaskForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </TaskForm>
  );
};

export default Form;
