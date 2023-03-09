import Image from "next/image";
import { StaticImageData } from "next/image";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import { Header } from "./Header";
import {
  ParallaxBannerHeader,
  ParallaxText,
  ParallaxTextContainer,
  Title,
} from "./styles";

type ParallaxHeaderProps = {
  image: StaticImageData | string;
  altText: string;
  title: string;
  fill?: boolean;
};
export const ParallaxHeader = ({
  image,
  title,
  altText,
  fill,
}: ParallaxHeaderProps) => (
  <ParallaxBannerHeader>
    <ParallaxBannerLayer speed={-60}>
      <Image src={image} alt={altText} fill={fill} />
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
        <Title>{title}</Title>
      </ParallaxText>
    </ParallaxTextContainer>
  </ParallaxBannerHeader>
);
