import { useState } from "react";
import {
  StyledTabsContent,
  StyledTabsList,
  StyledTabsRoot,
  StyledTabsTrigger,
} from "../common/styles";
import { BookingForm } from "./BookingForm";
import { GeneralForm } from "./GeneralForm";
import { EventForm } from "./EventForm";
import { ShootForm } from "./ShootForm";

enum TAB {
  EVENT = "Book a Party/Event",
  SHOOT = "Shoots",
  GENERAL = "General",
  MUSIC = "Music",
}

export const Contact = () => {
  const [tab, setTab] = useState(TAB.MUSIC);
  return (
    <StyledTabsRoot>
      <StyledTabsList>
        <StyledTabsTrigger
          onClick={() => setTab(TAB.EVENT)}
          active={tab === TAB.EVENT}
        >
          {TAB.EVENT}
        </StyledTabsTrigger>
        <StyledTabsTrigger
          onClick={() => setTab(TAB.SHOOT)}
          active={tab === TAB.SHOOT}
        >
          {TAB.SHOOT}
        </StyledTabsTrigger>
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
      {tab === TAB.EVENT && (
        <StyledTabsContent>
          <EventForm />
        </StyledTabsContent>
      )}
      {tab === TAB.SHOOT && (
        <StyledTabsContent>
          <ShootForm />
        </StyledTabsContent>
      )}
    </StyledTabsRoot>
  );
};
