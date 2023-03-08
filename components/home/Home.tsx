import styled from "styled-components";
import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ParallaxText, ParallaxTextContainer, Title } from "../common/styles";
import HouseFront from "../../public/home/house_front.jpg";
import HouseSide from "../../public/home/house_side.jpg";
import Restaurant from "../../public/home/restaurant.jpg";
import Sign from "../../public/home/sign.jpeg";
import { Header } from "../common";
import Link from "next/link";

const StyledParallaxBanner = styled(ParallaxBanner)`
  height: 100vh;
  position: relative;
  aspect-ratio: 16 / 9; ;
`;

export const Home = () => {
  return (
    <>
      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <Image src={HouseFront} alt="House Front" fill />
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
              <Title>WELCOME TO DREAMAWAY LODGE</Title>
            </Link>
          </ParallaxText>
        </ParallaxTextContainer>
      </StyledParallaxBanner>

      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <Image src={HouseSide} alt="House Side" fill />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <ParallaxTextContainer>
            <ParallaxText>
              <Title>GOOD FOOD</Title>
            </ParallaxText>
          </ParallaxTextContainer>
        </ParallaxBannerLayer>
      </StyledParallaxBanner>

      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <Image src={Restaurant} alt="Restaurant" fill />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <ParallaxTextContainer>
            <ParallaxText>
              <Title>GREAT MUSIC</Title>
            </ParallaxText>
          </ParallaxTextContainer>
        </ParallaxBannerLayer>
      </StyledParallaxBanner>

      <StyledParallaxBanner>
        <ParallaxBannerLayer speed={-50}>
          <Image src={Sign} alt="Sign" fill />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <ParallaxTextContainer>
            <ParallaxText>
              <Title>TONS OF FUN</Title>
            </ParallaxText>
          </ParallaxTextContainer>
        </ParallaxBannerLayer>
      </StyledParallaxBanner>
    </>
  );
};
