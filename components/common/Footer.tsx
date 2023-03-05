import styled from "styled-components";
import { DREAMAWAY_EMAIL } from "../../utils";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.1rem;
  text-align: center;
  height: 10rem;
`;

export const Footer = () => (
  <StyledFooter>
    <p>
      Dreamaway Lodge, 1342 County Road Becket, MA 01223
      <br />
      (413) 623-8725
      <br />
      <a href={`mailto:${DREAMAWAY_EMAIL}`}> {DREAMAWAY_EMAIL} </a>
    </p>
  </StyledFooter>
);
