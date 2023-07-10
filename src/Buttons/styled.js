import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  color: ${({ theme }) => theme.color.atoll};
  transition: 0.5s;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.atoll};
  cursor: pointer;

  ${({ $markAllDone }) =>
    $markAllDone &&
    css`
      &:hover {
        color: ${({ theme }) => theme.color.brightTurquoise};
      }
      &:active {
        border: 2px solid ${({ theme }) => theme.color.black};
      }
      &:disabled {
        color: ${({ theme }) => theme.color.silver};
      }
    `}

  ${({ $toggleHideDone }) =>
    $toggleHideDone &&
    css`
      &:hover {
        color: ${({ theme }) => theme.color.brightTurquoise};
      }
      &:active {
        border: 2px solid ${({ theme }) => theme.color.black};
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        margin: 2px;
      }
    `}
`;
