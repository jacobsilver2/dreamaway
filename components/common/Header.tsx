import { useCallback, useContext, useEffect } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../utils";
import { LayoutContext } from "./layouts";

export const StyledHeaderLink = styled(Link)<{ isActive?: boolean }>`
  color: ${({ theme, isActive: active }) =>
    active ? theme.colors.yellow : theme.colors.white};
`;

const StyledHeader = styled.header`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: transparent; */
  background: black;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
`;

const StyledHeaderLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
`;

const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
`;

const StyledHamburgerWrapper = styled.div`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 100;
  }
`;

const StyledDesktopLI = styled.li`
  display: none;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

const StyledLogo = styled.div`
  display: none;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

export type HeaderLinks = {
  [key: string]: string;
};

export const headerLinks: HeaderLinks = {
  music: "/music",
  menus: "/menu",
  events: "/events",
  faq: "/faq",
  instagram: "https://www.instagram.com/thedreamawaylodge/",
  history: "/history",
  contact: "/contact",
};

const renderHeaderLinks = ({
  links,
  pathname,
}: {
  links: HeaderLinks;
  pathname: string;
}) =>
  Object.keys(links).map((key) => {
    if (key === "instagram") {
      return (
        <StyledDesktopLI key={key}>
          <a href={links[key]} target="_blank">
            <h4>{key}</h4>
          </a>
        </StyledDesktopLI>
      );
    }

    return (
      <StyledDesktopLI key={key}>
        <StyledHeaderLink
          isActive={pathname.includes(links[key])}
          href={links[key]}
        >
          <h4>{key}</h4>
        </StyledHeaderLink>
      </StyledDesktopLI>
    );
  });

export const getIsActive = (pathname: string, link: string) => {
  if (link === "/") {
    return pathname === "/";
  }
  return pathname.includes(link);
};

export const Header = () => {
  const { mobileMenuIsOpen, toggleMobileMenu } = useContext(LayoutContext);
  const { pathname } = useRouter();

  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <Link href="/">
            <h3>Dreamaway Lodge</h3>
          </Link>
        </StyledLogo>
        <StyledHeaderLinks>
          <StyledUL>
            {renderHeaderLinks({
              links: { ...headerLinks },
              pathname,
            })}
          </StyledUL>
        </StyledHeaderLinks>
      </StyledHeader>
      <StyledHamburgerWrapper>
        <Hamburger
          color="white"
          toggled={mobileMenuIsOpen}
          toggle={toggleMobileMenu}
        />
      </StyledHamburgerWrapper>
    </>
  );
};
