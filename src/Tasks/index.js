import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ThemeProvider theme={theme}>
    <List>
      {tasks.map((task) => (
        <Item key={task.id} $hidden={task.done && hideDone}>
          <ToggleDoneButton onClick={() => toggleTaskDone(task.id)}>
            {task.done ? " ✓ " : ""}
          </ToggleDoneButton>
          <Content $done={task.done}>{task.content}</Content>
          <RemoveButton onClick={() => removeTask(task.id)}>🗑</RemoveButton>
        </Item>
      ))}
    </List>
  </ThemeProvider>
);

export default Tasks;
