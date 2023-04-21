import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { LayoutContext } from "../common";

// const StyledRightEdgeNavDots = styled.div<{ visible: boolean }>`
const StyledRightEdgeNavDots = styled.div`
  @media (max-width: ${({ theme }) => theme.sizes.mobileBreakpoint}) {
    display: none;
  }
  transition: 0.2s ease-out;
  position: fixed;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`;

const StyledNavDotContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
`;

const StyledNavDot = styled.div<{ active?: boolean }>`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ active, theme }) =>
    active ? theme.colors.white : "transparent"};
  transition: 0.2s ease-out;
  ${StyledNavDotContainer}:hover & {
    transform: scale(1.2);
  }
  .overlapsFooter {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const StyledNavDotText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  opacity: 0;
  transform: translateX(-1rem);
  transition: 0.2s ease-out;
  ${StyledNavDotContainer}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
  ${StyledNavDot}:hover & {
    opacity: 0;
    transform: translateX(-1rem);
  }
`;

export const NavDots = () => {
  const [active, setActive] = useState<
    "homeBanner" | "menusBanner" | "musicBanner"
  >("homeBanner");
  const { footerIsVisible } = useContext(LayoutContext);

  const handleScroll = () => {
    const homeBanner = document.getElementById("homeBanner");
    const menusBanner = document.getElementById("menusBanner");
    const musicBanner = document.getElementById("musicBanner");

    if (homeBanner && menusBanner && musicBanner) {
      const homeBannerTop = homeBanner.getBoundingClientRect().top;
      const menusBannerTop = menusBanner.getBoundingClientRect().top;
      const musicBannerTop = musicBanner.getBoundingClientRect().top;

      if (homeBannerTop <= 0 && menusBannerTop > 0) {
        setActive("homeBanner");
      } else if (menusBannerTop <= 0 && musicBannerTop > 0) {
        setActive("menusBanner");
      } else if (musicBannerTop <= 0) {
        setActive("musicBanner");
      }
    }

    const homeDot = document.getElementById("homeDot");
    const menusDot = document.getElementById("menusDot");
    const musicDot = document.getElementById("musicDot");
    const footer = document.getElementById("footer");

    if (homeDot && menusDot && musicDot) {
      const homeDotRect = homeDot.getBoundingClientRect();
      const menusDotRect = menusDot.getBoundingClientRect();
      const musicDotRect = musicDot.getBoundingClientRect();
      const footerRect = footer?.getBoundingClientRect();

      const homeDotOverlapsFooter =
        footerRect &&
        homeDotRect.top < footerRect.top &&
        homeDotRect.bottom > footerRect.top;
      const menusDotOverlapsFooter =
        footerRect &&
        menusDotRect.top < footerRect.top &&
        menusDotRect.bottom > footerRect.top;
      const musicDotOverlapsFooter =
        footerRect &&
        musicDotRect.top < footerRect.top &&
        musicDotRect.bottom > footerRect.top;

      console.log({
        homeDotOverlapsFooter,
        menusDotOverlapsFooter,
        musicDotOverlapsFooter,
      });

      if (homeDotOverlapsFooter) {
        homeDot.className = "overlapsFooter";
      }

      if (menusDotOverlapsFooter) {
        menusDot.className = "overlapsFooter";
      }

      if (musicDotOverlapsFooter) {
        musicDot.className = "overlapsFooter";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledRightEdgeNavDots>
      <StyledNavDotContainer id="homeDot">
        <StyledNavDotText>dream away lodge</StyledNavDotText>
        <StyledNavDot
          active={active === "homeBanner"}
          onClick={() => {
            setActive("homeBanner");
            const element = document.getElementById("homeBanner");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </StyledNavDotContainer>

      <StyledNavDotContainer id="menusDot">
        <StyledNavDotText>eat, drink</StyledNavDotText>
        <StyledNavDot
          active={active === "menusBanner"}
          onClick={() => {
            setActive("menusBanner");
            const element = document.getElementById("menusBanner");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </StyledNavDotContainer>

      <StyledNavDotContainer id="musicDot">
        <StyledNavDotText>listen</StyledNavDotText>
        <StyledNavDot
          active={active === "musicBanner"}
          onClick={() => {
            setActive("musicBanner");
            const element = document.getElementById("musicBanner");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </StyledNavDotContainer>
    </StyledRightEdgeNavDots>
  );
};
