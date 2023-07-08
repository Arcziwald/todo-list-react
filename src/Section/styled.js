import styled from "styled-components";

export const StyleSection = styled.section`
  padding: 10px;
  margin: 10px;
  background: white;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
  padding: 20px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
