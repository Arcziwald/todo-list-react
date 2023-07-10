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
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  word-break: break-word;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0;
  transition: color 1s;
  cursor: pointer;
`;

export const ToggleDoneButton = styled(Button)`
  background: ${({ theme }) => theme.color.forestGreen};

  &:hover {
    background: ${({ theme }) => theme.color.seaGreen};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.color.black};
  }
`;

export const RemoveButton = styled(Button)`
  background: ${({ theme }) => theme.color.crimson};

  &:hover {
    background: ${({ theme }) => theme.color.torchRed};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.color.black};
  }
`;
