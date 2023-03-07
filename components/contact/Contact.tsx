import { useState } from "react";
import styled, { css } from "styled-components";
import { BookingForm } from "../booking";

enum TAB {
  MUSIC = "Music",
  GENERAL = "General",
}

const StyledTabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledTabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;

const StyledTabsTrigger = styled.div<{ active: boolean }>`
  box-shadow: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 5rem;
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:focus {
    position: relative;
    border: none;
  }

  ${({ active }) =>
    active &&
    css`
      border: none;
      box-shadow: none;
      color: ${({ theme }) => theme.colors.yellow};
    `}
`;

const StyledTabsContent = styled.div`
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
  &:focus {
    position: relative;
    border: none;
  }
`;

export const Contact = () => {
  const [tab, setTab] = useState(TAB.MUSIC);
  return (
    <StyledTabsRoot>
      <StyledTabsList>
        <StyledTabsTrigger
          onClick={() => setTab(TAB.MUSIC)}
          active={tab === TAB.MUSIC}
        >
          {TAB.MUSIC}
        </StyledTabsTrigger>
        <StyledTabsTrigger
          onClick={() => setTab(TAB.GENERAL)}
          active={tab === TAB.GENERAL}
        >
          {TAB.GENERAL}
        </StyledTabsTrigger>
      </StyledTabsList>
      {tab === TAB.MUSIC && (
        <StyledTabsContent>
          <BookingForm />
        </StyledTabsContent>
      )}
      {tab === TAB.GENERAL && <StyledTabsContent>GENERAL</StyledTabsContent>}
    </StyledTabsRoot>
  );
};
