import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main<{ maxWidth?: boolean }>`
  padding: 5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
  ${({ maxWidth }) => maxWidth && `padding: 5rem 20rem;`}
  @media (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    width: 100%;
    padding: 5rem 1rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    font-size: 2.5rem;
  }
`;

export const StyledFullwidthImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const ParallaxBannerHeader = styled(ParallaxBanner)`
  height: 50vh;
  position: relative;
  aspect-ratio: 16 / 9;
  @media (max-width: ${({ theme }) => theme.sizes.mobileBreakpoint}) {
    height: 40vh;
  }
`;

export const ParallaxTextContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ParallaxText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  label {
    margin: 1rem 0;
    font-size: 1rem;
    align-self: flex-start;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
    &:focus {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      outline: ${({ theme }) => theme.colors.yellow} auto 5px;
    }
  }
  select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
    &:focus {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      outline: ${({ theme }) => theme.colors.yellow} auto 5px;
    }
  }
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
    &:focus {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      outline: ${({ theme }) => theme.colors.yellow} auto 5px;
    }
  }
  input[type="submit"] {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 500;
    width: 100%;
    height: 5rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 1rem 0;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const StyledRequired = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
`;

export const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const FoodCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 0;
`;

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
`;

export const FoodItem = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  padding: 1rem;
`;
