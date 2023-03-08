import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";

export const Container = styled.main`
  padding: 5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;
export const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const ParallaxBannerHeader = styled(ParallaxBanner)`
  height: 30vh;
  position: relative;
  aspect-ratio: 16 / 9; ;
`;

export const ParallaxTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ParallaxText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;
