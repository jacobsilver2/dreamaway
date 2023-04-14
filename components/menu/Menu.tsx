import styled from "styled-components";
import { useState } from "react";
import {
  StyledTabsContent,
  StyledTabsRoot,
  StyledTabsTrigger,
} from "../common/styles";
import { Dinner } from "./Dinner";
import { Wine } from "./Wine";
import { Beer } from "./Beer";
import { Cocktails } from "./Cocktails";
import { SpiritFree } from "./SpiritFree";

export const StyledTabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;

export const TabContent = styled(StyledTabsContent)`
  color: ${({ theme }) => theme.colors.black};
`;

enum TAB {
  DINNER = "Dinner",
  WINE = "Wine",
  BEER = "Beer",
  COCKTAILS = "Cocktails",
  SPIRIT_FREE = "Spirit Free",
}

export const Menu = () => {
  const [tab, setTab] = useState(TAB.DINNER);

  const renderTabContent = () => {
    switch (tab) {
      case TAB.DINNER:
        return <Dinner />;
      case TAB.WINE:
        return <Wine />;
      case TAB.BEER:
        return <Beer />;
      case TAB.COCKTAILS:
        return <Cocktails />;
      case TAB.SPIRIT_FREE:
        return <SpiritFree />;
    }
  };

  const renderTabTriggers = () =>
    Object.values(TAB).map((tabName) => (
      <StyledTabsTrigger
        key={tabName}
        active={tab === tabName}
        onClick={() => setTab(tabName)}
      >
        {tabName}
      </StyledTabsTrigger>
    ));

  return (
    <StyledTabsRoot>
      <StyledTabsList>{renderTabTriggers()}</StyledTabsList>
      <TabContent>{renderTabContent()}</TabContent>
    </StyledTabsRoot>
  );
};
