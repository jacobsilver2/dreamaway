import { StaticImageData } from "next/image";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import { getFullDate } from "../../utils";
import { Header } from "./Header";
import {
  ParallaxBannerHeader,
  ParallaxText,
  ParallaxTextContainer,
  StyledFullwidthImage,
  Title,
} from "./styles";

type ParallaxHeaderProps = {
  image: StaticImageData | string;
  altText: string;
  title: string;
  subText?: string;
  date?: string;
  time?: string;
  fill?: boolean;
};
export const ParallaxHeader = ({
  image,
  title,
  altText,
  date,
  time,
  subText,
  fill = false,
}: ParallaxHeaderProps) => {
  return (
    <ParallaxBannerHeader>
      <ParallaxBannerLayer speed={-60}>
        <StyledFullwidthImage src={image} alt={altText} fill={fill} />
      </ParallaxBannerLayer>

      <ParallaxBannerLayer
        translateY={[0, 10]}
        shouldAlwaysCompleteAnimation
        expanded={false}
      >
        <Header />
      </ParallaxBannerLayer>

      <ParallaxTextContainer>
        <ParallaxText>
          <Title>{title}</Title>
          {subText && <h3>{subText}</h3>}
          {date && <h3>{getFullDate(date)}</h3>}
          {time && <h3>{time}</h3>}
        </ParallaxText>
      </ParallaxTextContainer>
    </ParallaxBannerHeader>
  );
};
