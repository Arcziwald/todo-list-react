import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgb(221, 221, 221);
  word-break: break-word;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: rgb(255, 255, 255);
  width: 30px;
  height: 30px;
  padding: 0;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: rgb(32, 124, 29);
      transition: color 1s;
      cursor: pointer;
      &:hover {
        background: rgb(29, 146, 37);
      }
      &:active {
        border: 2px solid rgb(0, 0, 0);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: rgb(219, 20, 20);
      transition: color 1s;
      cursor: pointer;
      &:hover {
        background: rgb(250, 32, 32);
      }
      &:active {
        border: 2px solid rgb(0, 0, 0);
      }
    `}
`;
