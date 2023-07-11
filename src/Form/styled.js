import styled from "styled-components";

export const TaskForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
export const Container = styled.main`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.gallery};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    &:focus {
      outline: 1px solid ${({ theme }) => theme.color.tangerine};
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.color.teal};
  transition: 1s ease;
  color: ${({ theme }) => theme.color.white};
  border: none;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.color.persionGreen};
    cursor: pointer;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-height: 45px;
  }
`;
