import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import styled from "styled-components";
import Logo from "../../public/logo.png";

const StyledHeaderLink = styled(Link)<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.yellow : theme.colors.white};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
`;

const StyledHeaderLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
`;

type HeaderLinks = {
  [key: string]: string;
};

const HeaderLinksLeft: HeaderLinks = {
  calendar: "/calendar",
  dining: "/dining",
  bar: "/bar",
};

const HeaderLinksRight: HeaderLinks = {
  directions: "/directions",
  ["weddings/events"]: "/events",
  contact: "/contact",
};

const renderHeaderLinks = ({
  links,
  pathname,
}: {
  links: HeaderLinks;
  pathname: string;
}) =>
  Object.keys(links).map((key) => (
    <li>
      <StyledHeaderLink
        active={pathname.includes(links[key])}
        href={links[key]}
      >
        {key}
      </StyledHeaderLink>
    </li>
  ));

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <Headroom>
      <StyledHeader>
        <StyledHeaderLinks>
          <StyledUL>
            {renderHeaderLinks({ links: HeaderLinksLeft, pathname })}
          </StyledUL>
          <Link href="/">
            <Image src={Logo} alt="DreamawayLogo" width={70} />
          </Link>
          <StyledUL>
            {renderHeaderLinks({ links: HeaderLinksRight, pathname })}
          </StyledUL>
        </StyledHeaderLinks>
      </StyledHeader>
    </Headroom>
  );
};
