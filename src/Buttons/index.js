import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.lenght === 0) {
    return null;
  }
  return (
    <div className="Buttons__button">
      <button className="Buttons__button button--toggleHideDoneButton">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="Buttons__button button--markAllDoneButton"
        autofocus
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
