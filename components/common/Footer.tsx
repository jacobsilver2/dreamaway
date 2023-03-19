import styled from "styled-components";
import { DREAMAWAY_EMAIL } from "../../utils";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  text-align: center;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
    padding: 0;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <StyledUL>
      <li>
        <h3>hours of operation</h3>
      </li>
      <li>open nightly 5pm ~ 1am </li>
      <li>happy hour 5pm-7pm</li>
      <li>dinner menu 6pm - 11pm</li>
      <li>live music - from 9pm</li>
    </StyledUL>
    <StyledUL>
      <h3>location</h3>
      <li>Dreamaway Lodge, 1342 County Road Becket, MA 01223</li>
      <li>(413) 623-8725</li>
      <li>
        <a href={`mailto:${DREAMAWAY_EMAIL}`}> {DREAMAWAY_EMAIL} </a>
      </li>
    </StyledUL>
    <StyledUL>
      <li>
        <h3>details</h3>
      </li>
      <li>
        musicians are supported through your donations. we recommend $10 per
        person (please bring cash!)
      </li>
    </StyledUL>
  </StyledFooter>
);
