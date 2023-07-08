import styled from "styled-components";

export const TaskForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid hsl(0, 0%, 93%);

  @media (max-width: 768px) {
    &:focus {
      outline: 1px solid rgb(235, 152, 0);
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  background: hsl(180, 100%, 25%);
  transition: 1s ease;
  color: rgb(255, 255, 255);
  border: none;

  &:hover {
    transform: scale(1.1);
    background-color: hsl(180, 100%, 30%);
    cursor: pointer;
  }

  &:focus {
    outline: 2px solid rgb(0, 0, 0);
  }

  @media (max-width: 768px) {
    min-height: 45px;
  }
`;
