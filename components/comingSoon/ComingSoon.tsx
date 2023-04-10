import styled from "styled-components";
import { StyledFullwidthImage } from "../common/styles";
import SignImage from "../../public/faq/sign_compressed_1600.jpeg";

export const StyledFullBleedContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(StyledFullwidthImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
`;

export const ComingSoon = () => {
  return (
    <StyledFullBleedContainer>
      <StyledImage src={SignImage} alt="Sign Image" fill />
      <StyledTextContainer>
        <div>
          <h1>NEW WEBSITE COMING SOON</h1>
        </div>
        <div>
          <a href="https://www.instagram.com/thedreamawaylodge/">
            PLEASE VISIT OUR INSTAGRAM PAGE FOR INFO
          </a>
        </div>
      </StyledTextContainer>
    </StyledFullBleedContainer>
  );
};
