import { useState, useEffect } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../utils";
import { Portal } from "./Portal";
import { Title } from "./styles";

const StyledHeaderLink = styled(Link)<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.yellow : theme.colors.white};
`;

const StyledHeader = styled.header`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  background-color: transparent;
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

const StyledMobileLI = styled.li`
  display: block;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const StyledMobileUL = styled.ul`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
  }
`;

type HeaderLinks = {
  [key: string]: string;
};

const headerLinksLeft: HeaderLinks = {
  calendar: "/calendar",
  dining: "/dining",
  bar: "/bar",
};

const headerLinksRight: HeaderLinks = {
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
    <StyledDesktopLI key={key}>
      <StyledHeaderLink
        active={pathname.includes(links[key])}
        href={links[key]}
      >
        {key}
      </StyledHeaderLink>
    </StyledDesktopLI>
  ));

const renderOverlayLinks = ({
  links,
  pathname,
  setOpen,
}: {
  links: HeaderLinks;
  pathname: string;
  setOpen: (isOpen: boolean) => void;
}) =>
  Object.keys(links).map((key) => (
    <StyledMobileLI key={key}>
      <Title>
        <StyledHeaderLink
          onClick={() => setOpen(false)}
          active={pathname.includes(links[key])}
          href={links[key]}
        >
          {key}
        </StyledHeaderLink>
      </Title>
    </StyledMobileLI>
  ));

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <p>Dreamaway Lodge</p>
        </Link>

        <StyledHeaderLinks>
          <StyledUL>
            {renderHeaderLinks({
              links: { ...headerLinksLeft, ...headerLinksRight },
              pathname,
            })}
          </StyledUL>
        </StyledHeaderLinks>
      </StyledHeader>
      <StyledHamburgerWrapper>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </StyledHamburgerWrapper>
      <Portal isOpen={isOpen} setOpen={setOpen}>
        <StyledMobileUL>
          {renderOverlayLinks({
            links: { ...headerLinksLeft, ...headerLinksRight },
            pathname,
            setOpen,
          })}
        </StyledMobileUL>
      </Portal>
    </>
  );
};
