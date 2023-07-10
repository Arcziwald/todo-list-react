import { Wrapper, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <Wrapper>
      <StyledButton
        onClick={toggleHideDone}
        toggleHideDone
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={setAllDone}
        markAllDone
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </Wrapper>
  );
};

export default Buttons;
