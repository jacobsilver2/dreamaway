import styled from "styled-components";
import { useState } from "react";
import {
  StyledTabsContent,
  StyledTabsRoot,
  StyledTabsTrigger,
} from "../common/styles";

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
        return <div>{TAB.DINNER}</div>;
      case TAB.WINE:
        return <div>{TAB.WINE}</div>;
      case TAB.BEER:
        return <div>{TAB.BEER}</div>;
      case TAB.COCKTAILS:
        return <div>{TAB.COCKTAILS}</div>;
      case TAB.SPIRIT_FREE:
        return <div>{TAB.SPIRIT_FREE}</div>;
      case TAB.DINNER:
        return <div>{TAB.DINNER}</div>;
    }
  };

  const renderTabTriggers = () =>
    Object.keys(TAB).map((tab) => {
      return (
        <StyledTabsTrigger
          key={tab}
          active={tab === TAB[tab]}
          onClick={() => setTab(TAB[tab])}
        >
          {TAB[tab]}
        </StyledTabsTrigger>
      );
    });

  return (
    <StyledTabsRoot>
      <StyledTabsList>{renderTabTriggers()}</StyledTabsList>
      <TabContent>{renderTabContent()}</TabContent>
    </StyledTabsRoot>
  );
};
