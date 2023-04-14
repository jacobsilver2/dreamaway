import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import {
  ParallaxText,
  ParallaxTextContainer,
  StyledFullwidthImage,
  Title,
} from "../common/styles";
import HomeImage from "../../public/home/black_hat_compressed_1800.jpeg";
import GuitarImage from "../../public/menus/guitar_compressed.jpeg";
import { LayoutContext, Header } from "../common";
import Link from "next/link";
import { NavDots } from "./NavDots";

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHomeLink = styled.div`
  font-size: 2rem;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 300px;
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Home = () => (
  <>
    <NavDots />
    <StyledParallaxBanner id="homeBanner">
      <ParallaxBannerLayer speed={-50}>
        <StyledFullwidthImage src={HomeImage} alt="House Front" fill />
      </ParallaxBannerLayer>

      <ParallaxBannerLayer
        translateY={[0, 75]}
        shouldAlwaysCompleteAnimation
        expanded={false}
      >
        <Header />
      </ParallaxBannerLayer>

      <ParallaxTextContainer>
        <ParallaxText>
          <Title>
            The
            <br /> Dream Away
            <br /> Lodge
          </Title>
        </ParallaxText>
      </ParallaxTextContainer>
    </StyledParallaxBanner>

    <StyledParallaxBanner id="menusBanner">
      <ParallaxBannerLayer speed={-50}>
        <StyledFullwidthImage src={GuitarImage} alt="Restaurant" fill />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-10}>
        <ParallaxTextContainer>
          <ParallaxText>
            <StyledTextContainer>
              <h4>
                “Food is music to the body, music is food to the heart” -
                Gregory David Roberts
              </h4>
              <StyledButtonWrapper>
                <Link href="/menu">
                  <StyledHomeLink>MENUS</StyledHomeLink>
                </Link>
              </StyledButtonWrapper>
            </StyledTextContainer>
          </ParallaxText>
        </ParallaxTextContainer>
      </ParallaxBannerLayer>
    </StyledParallaxBanner>

    <StyledParallaxBanner id="musicBanner">
      <ParallaxBannerLayer speed={-50}>
        <StyledFullwidthImage src={GuitarImage} alt="House Side" fill />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-10}>
        <ParallaxTextContainer>
          <ParallaxText>
            <StyledTextContainer>
              <h2>Live Music</h2>
              <StyledButtonWrapper>
                <Link href="/music">
                  <StyledHomeLink>Calendar</StyledHomeLink>
                </Link>
              </StyledButtonWrapper>
            </StyledTextContainer>
          </ParallaxText>
        </ParallaxTextContainer>
      </ParallaxBannerLayer>
    </StyledParallaxBanner>
  </>
);
