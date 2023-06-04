import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
  if (tasks.lenght === 0) {
    return null;
  }
  return (
    <div className="buttons__button">
      <button className="buttons__button button--toggleHideDoneButton">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button button--markAllDoneButton"
        autofocus
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
