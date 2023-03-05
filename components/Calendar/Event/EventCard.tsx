import Image from "next/image";
import styled from "styled-components";
import { format } from "date-fns";
import { EventBean, EVENT_IMAGE_HEIGHT } from "../../../utils";
import { Description, Title } from "../../common/styles";
import { FlexContainer, StyledCard } from "../CalendarCard";

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const StyledEventCard = styled(StyledCard)`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  border: none;
`;

export const EventCard = ({ event }: { event: EventBean }) => {
  const formattedDate = format(new Date(event?.fields.Date), "MMMM do");
  return (
    <FlexContainer>
      <StyledEventCard>
        <StyledImageContainer>
          <Image
            src={event.fields.act_image[0].url}
            alt={event.fields.act_image[0].filename}
            width={EVENT_IMAGE_HEIGHT}
            height={EVENT_IMAGE_HEIGHT}
          />
        </StyledImageContainer>
        <div>
          <Title>{event?.fields.Name}</Title>
          <Description>
            {formattedDate}, {event?.fields.Time_Formatted}
          </Description>
          <Description>{event?.fields.act_blurb}</Description>
        </div>
      </StyledEventCard>
    </FlexContainer>
  );
};
