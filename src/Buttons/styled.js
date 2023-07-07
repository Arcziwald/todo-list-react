import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  border: none;
  color: rgb(9, 114, 133);
  transition: 0.5s;
  cursor: pointer;

  ${({ markAllDone }) =>
    markAllDone &&
    css`
      &:hover {
        color: rgb(18, 201, 233);
      }
      &:active {
        border: 2px solid rgb(0, 0, 0);
      }
      &:disabled {
        color: gray;
      }
    `}

  ${({ toggleHideDone }) =>
    toggleHideDone &&
    css`
      &:hover {
        color: rgb(18, 201, 233);
      }
      &:active {
        border: 2px solid rgb(0, 0, 0);
      }
      @media (max-width: 767px) {
        width: 100%;
        margin: 2px;
      }
    `}
`;
