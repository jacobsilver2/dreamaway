import styled from "styled-components";
import { StyledFullwidthImage } from "../common/styles";
import SignImage from "../../public/faq/sign_compressed_1600.jpeg";
import { DREAMAWAY_FACEBOOK, DREAMAWAY_INSTAGRAM } from "../../utils";
import { Instagram } from "../common/Instagram";
import { Facebook } from "../common/Facebook";

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
  align-self: flex-start;
  margin-top: 13rem;
  /* text-align: center; */
  gap: 2rem;
  position: relative;
  z-index: 1;
  padding: 2rem;
  /* background: ${({ theme }) => theme.colors.lightGrey}; */
  opacity: 0.9;
  min-width: 20rem;
  border-radius: 1rem;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

export const ComingSoon = () => {
  return (
    <StyledFullBleedContainer>
      <StyledImage src={SignImage} alt="Sign Image" fill />
      <StyledTextContainer>
        <div>{/* <h3>FOLLOW US</h3> */}</div>
        <Socials>
          <a href={DREAMAWAY_INSTAGRAM}>
            <Instagram width={120} />
          </a>
          <a href={DREAMAWAY_FACEBOOK}>
            <Facebook width={120} />
          </a>
        </Socials>
      </StyledTextContainer>
    </StyledFullBleedContainer>
  );
};
