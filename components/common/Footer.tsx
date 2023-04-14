import styled from "styled-components";
import {
  DREAMAWAY_EMAIL,
  DREAMAWAY_FACEBOOK,
  DREAMAWAY_INSTAGRAM,
} from "../../utils";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
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

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

export const Footer = () => (
  <StyledFooter>
    <StyledUL>
      <li>
        <Socials>
          <a target="_blank" rel="noreferrer" href={DREAMAWAY_FACEBOOK}>
            <Facebook />
          </a>
          <a target="_blank" rel="noreferrer" href={DREAMAWAY_INSTAGRAM}>
            <Instagram />
          </a>
        </Socials>
      </li>
      <li>
        <h3>hours of operation</h3>
      </li>
      <li>open wed - sun 5pm ~ 1am</li>
      <li>dinner menu 5pm - 9pm</li>
      <li>live music - from 8pm</li>
    </StyledUL>
    <StyledUL>
      <h3>location</h3>
      <li>1342 County Rd, Becket, MA 01223</li>
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
        All the musicians are supported through your donations.  We recommend
        $10 or more per person (please bring cash!) or look for performer QR
        code on site
      </li>
    </StyledUL>
  </StyledFooter>
);
