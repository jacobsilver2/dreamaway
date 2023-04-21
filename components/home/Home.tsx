import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import {
  Character,
  ParallaxText,
  ParallaxTextContainer,
  StyledFullwidthImage,
  Title,
  Word,
} from "../common/styles";
import HomeImage from "../../public/home/black_hat_compressed_1800.jpeg";
import GuitarImage from "../../public/menus/guitar_compressed.jpeg";
import { Header } from "../common";
import Link from "next/link";
import { NavDots } from "./NavDots";
import { characterAnimation, wordAnimation } from "../../utils/animations";

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

const StyledButtonWrapper = styled(motion.div)`
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

const renderAnimatedText = (text, ref, controls) =>
  text.split(" ").map((word, index) => (
    <Word
      ref={ref}
      aria-hidden="true"
      key={index}
      initial="hidden"
      animate={controls}
      variants={wordAnimation}
      transition={{
        delayChildren: index * 0.25,
        staggerChildren: 0.05,
      }}
    >
      {word.split("").map((character, index) => {
        return (
          <Character
            aria-hidden="true"
            key={index}
            variants={characterAnimation}
          >
            {character}
          </Character>
        );
      })}
    </Word>
  ));

export const Home = () => {
  const homeControls = useAnimation();
  const restaurantControls = useAnimation();
  const calendarControls = useAnimation();

  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: restaurantRef, inView: restaurantInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: calendarRef, inView: calendarInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (homeInView) {
      homeControls.start("visible");
    }
    if (!homeInView) {
      homeControls.start("hidden");
    }
  }, [homeControls, homeInView]);

  useEffect(() => {
    if (restaurantInView) {
      restaurantControls.start("visible");
    }
    if (!restaurantInView) {
      restaurantControls.start("hidden");
    }
  }, [restaurantControls, restaurantInView]);

  useEffect(() => {
    if (calendarInView) {
      calendarControls.start("visible");
    }
    if (!calendarInView) {
      calendarControls.start("hidden");
    }
  }, [calendarControls, calendarInView]);

  return (
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
            <Title aria-label="The Dream Away Lodge" role="Heading">
              {renderAnimatedText("The", homeRef, homeControls)}
              <br />
              {renderAnimatedText("Dream Away", homeRef, homeControls)}
              <br />
              {renderAnimatedText("Lodge", homeRef, homeControls)}
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
                  {renderAnimatedText(
                    "“Food is music to the body, music is food to the heart” - Gregory David Roberts",
                    restaurantRef,
                    restaurantControls
                  )}
                </h4>
                <StyledButtonWrapper
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.2,
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
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
                <h2>
                  {renderAnimatedText(
                    "Live Music",
                    calendarRef,
                    calendarControls
                  )}
                </h2>
                <StyledButtonWrapper
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.2,
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
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
};
