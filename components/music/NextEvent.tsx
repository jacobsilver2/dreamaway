import Link from "next/link";
import styled from "styled-components";
import { EVENT_IMAGE_WIDTH } from "../../utils";
import { useGetNextEvent } from "../../utils/query";
import { EventCard } from "./Event/EventCard";

const NextEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  max-width: ${EVENT_IMAGE_WIDTH}px;
  text-align: center;
`;

const StyledNextText = styled.div`
  text-align: left;
  width: 100%;
  line-height: 0;
`;

export const NextEvent = () => {
  const { nextEvent, isLoading, error } = useGetNextEvent();
  return (
    <NextEventContainer>
      <StyledNextText>
        <h3>Next</h3>
      </StyledNextText>
      <EventCard
        displaySubDate
        displayImage
        loading={isLoading}
        event={nextEvent}
      />
    </NextEventContainer>
  );
};
