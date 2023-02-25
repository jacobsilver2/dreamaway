import styled from "styled-components";
import Headroom from "react-headroom";
import Link from "next/link";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin: 0 0.5rem;
  }
`;

export const Header = () => (
  <Headroom>
    <StyledHeader>
      <h1>Dreamaway Lodge</h1>
      <StyledUL>
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        <li>
          <Link href="/api/events">Events API</Link>
        </li>
      </StyledUL>
    </StyledHeader>
  </Headroom>
);
