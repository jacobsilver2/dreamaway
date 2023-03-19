import { StaticImageData } from "next/image";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import styled from "styled-components";
import { getFullDate } from "../../utils";
import { Header } from "./Header";
import {
  Description,
  ParallaxBannerHeader,
  ParallaxText,
  ParallaxTextContainer,
  StyledFullwidthImage,
  Title,
} from "./styles";

const StyledDescription = styled(Description)`
  font-size: 1.5rem;
`;

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
  fill = true,
}: ParallaxHeaderProps) => (
  <ParallaxBannerHeader>
    <ParallaxBannerLayer speed={-60}>
      <StyledFullwidthImage src={image} alt={altText} fill={fill} />
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
        {subText && <StyledDescription>{subText}</StyledDescription>}
        {date && <StyledDescription>{getFullDate(date)}</StyledDescription>}
        {time && <StyledDescription>{time}</StyledDescription>}
      </ParallaxText>
    </ParallaxTextContainer>
  </ParallaxBannerHeader>
);
