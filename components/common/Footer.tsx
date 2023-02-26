import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.1rem;
  text-align: center;
`;

export const Footer = () => (
  <StyledFooter>
    <p>Dreamaway Footer</p>
  </StyledFooter>
);
