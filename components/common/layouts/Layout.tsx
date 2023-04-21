import { useRef, createContext, useEffect, useCallback } from "react";
import Head from "next/head";
import { AnimatePresence, Cycle, motion, useCycle } from "framer-motion";
import styled from "styled-components";
import { LayoutProps } from "../../../utils/types";
import { Footer } from "../Footer";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import {
  HeaderLinks,
  StyledHeaderLink,
  getIsActive,
  headerLinks,
} from "../Header";
import { Title } from "../styles";
import { useRouter } from "next/router";
import Link from "next/link";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const StyledMotionAside = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.brown};
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
`;

const StyledMobileLI = styled(motion.li)`
  display: block;
`;

export const MobileOverlayCloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  cursor: pointer;
`;

const Grid = styled.div<{ mobileMenuOpen?: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  main {
    overflow: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "hidden" : "unset")};
    width: 100%;
    height: 100%;
    flex: auto;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  footer {
    grid-area: footer;
  }
`;

const renderOverlayLinks = ({
  links,
  pathname,
}: {
  links: HeaderLinks;
  pathname: string;
}) =>
  Object.keys(links).map((key) => (
    <StyledMobileLI variants={itemVariants} key={key}>
      <Title>
        <StyledHeaderLink
          isActive={getIsActive(pathname, links[key])}
          href={links[key]}
        >
          {key}
        </StyledHeaderLink>
      </Title>
    </StyledMobileLI>
  ));

interface LayoutContextProps {
  footerIsVisible: boolean;
  mobileMenuIsOpen: boolean;
  toggleMobileMenu: () => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
  footerIsVisible: false,
  mobileMenuIsOpen: false,
  toggleMobileMenu: () => {},
});

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  const [open, cycleOpen] = useCycle(false, true);
  const footerRef = useRef(null);
  const footerIsVisible = useIsVisible(footerRef);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        cycleOpen();
      }
    },
    [cycleOpen, open]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>Dreamaway</title>
          <meta name="description" content="Welcome to the Dreamaway Lodge" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid mobileMenuOpen={open}>
          <main>
            <LayoutContext.Provider
              value={{
                footerIsVisible,
                mobileMenuIsOpen: open,
                toggleMobileMenu: cycleOpen,
              }}
            >
              {children}
            </LayoutContext.Provider>
          </main>
          <div id="footer" ref={footerRef}>
            <Footer />
          </div>
        </Grid>
      </motion.div>
      <AnimatePresence>
        {open && (
          <StyledMotionAside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <MobileOverlayCloseButton onClick={() => cycleOpen()}>
                X
              </MobileOverlayCloseButton>
              {renderOverlayLinks({
                links: { ...{ home: "/" }, ...headerLinks },
                pathname,
              })}
            </motion.div>
          </StyledMotionAside>
        )}
      </AnimatePresence>
    </>
  );
};
