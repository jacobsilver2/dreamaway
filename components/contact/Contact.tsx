import { useState } from "react";
import {
  StyledTabsContent,
  StyledTabsList,
  StyledTabsRoot,
  StyledTabsTrigger,
} from "../common/styles";
import { BookingForm } from "./BookingForm";
import { GeneralForm } from "./GeneralForm";

enum TAB {
  MUSIC = "Music",
  GENERAL = "General",
}

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
      {tab === TAB.GENERAL && (
        <StyledTabsContent>
          <GeneralForm />
        </StyledTabsContent>
      )}
    </StyledTabsRoot>
  );
};
