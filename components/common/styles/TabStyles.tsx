import styled, { css } from "styled-components";

export const StyledTabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const StyledTabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 1rem;
`;

export const StyledTabsTrigger = styled.div<{ active: boolean }>`
  box-shadow: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  &:focus {
    position: relative;
    border: none;
  }
`;

export const StyledTabsContent = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  form {
    width: 100%;
  }
  &:focus {
    position: relative;
    border: none;
  }
`;
