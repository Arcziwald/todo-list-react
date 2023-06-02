import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.lenght === 0) {
    return null;
  }
  return (
    <div className="stat__button">
      <button className="stat__button button--toggleHideDoneButton">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="stat__button button--markAllDoneButton"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
