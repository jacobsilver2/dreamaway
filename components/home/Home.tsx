import styled from "styled-components";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import {
  ParallaxText,
  ParallaxTextContainer,
  StyledFullwidthImage,
  Title,
} from "../common/styles";
import HouseFront from "../../public/home/house_front.jpg";
import HouseSide from "../../public/home/house_side.jpg";
import Restaurant from "../../public/home/restaurant.jpg";
import Sign from "../../public/home/sign.jpeg";
import { Header } from "../common";
import Link from "next/link";

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Home = () => {
  return (
    <>
      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <StyledFullwidthImage src={HouseFront} alt="House Front" fill />
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
            <Link href="/">
              <Title>dreamaway lodge</Title>
            </Link>
          </ParallaxText>
        </ParallaxTextContainer>
      </StyledParallaxBanner>

      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <StyledFullwidthImage src={HouseSide} alt="House Side" fill />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <ParallaxTextContainer>
            <ParallaxText>
              <Link href="/music">
                <Title>music</Title>
              </Link>
            </ParallaxText>
          </ParallaxTextContainer>
        </ParallaxBannerLayer>
      </StyledParallaxBanner>

      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <StyledFullwidthImage src={Restaurant} alt="Restaurant" fill />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <ParallaxTextContainer>
            <ParallaxText>
              <Link href="/menu">
                <Title>menu</Title>
              </Link>
            </ParallaxText>
          </ParallaxTextContainer>
        </ParallaxBannerLayer>
      </StyledParallaxBanner>

      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <StyledFullwidthImage src={Sign} alt="Sign" fill />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <ParallaxTextContainer>
            <ParallaxText>
              <Link href="/events">
                <Title>events</Title>
              </Link>
            </ParallaxText>
          </ParallaxTextContainer>
        </ParallaxBannerLayer>
      </StyledParallaxBanner>
    </>
  );
};
