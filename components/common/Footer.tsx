import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: center;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
};
