import { StyleSection, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyleSection>
    <Header>
      <Title> {title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </StyleSection>
);

export default Section;
