import { useEffect } from "react";
import { StaticImageData } from "next/image";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import { getFullDate } from "../../utils";
import { Header } from "./Header";
import {
  BannerTitle,
  Character,
  ParallaxBannerHeader,
  ParallaxText,
  ParallaxTextContainer,
  StyledFullwidthImage,
  Word,
} from "./styles";
import { characterAnimation, wordAnimation } from "../../utils/animations";

type ParallaxHeaderProps = {
  image: StaticImageData | string;
  altText: string;
  title: string;
  subText?: string;
  date?: string;
  time?: string;
  fill?: boolean;
  link?: string;
};
export const ParallaxHeader = ({
  image,
  title,
  altText,
  date,
  time,
  subText,
  link,
  fill = false,
}: ParallaxHeaderProps) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const renderAnimatedText = (text) =>
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
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <BannerTitle aria-label={title} role="heading">
                {renderAnimatedText(title)}
              </BannerTitle>
            </a>
          ) : (
            <BannerTitle aria-label={title} role="heading">
              {renderAnimatedText(title)}
            </BannerTitle>
          )}
          {subText && <h3>{renderAnimatedText(subText)}</h3>}
          {date && <h3>{renderAnimatedText(getFullDate(date))}</h3>}
          {time && <h3>{renderAnimatedText(time)}</h3>}
        </ParallaxText>
      </ParallaxTextContainer>
    </ParallaxBannerHeader>
  );
};
