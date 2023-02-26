import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import { Description, Title } from "../common/styles";
import { EventBean } from "../../utils";

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

export const StyledCard = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    cursor: pointer;
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
);

export const CalendarCard = ({ event }: { event: EventBean }) => {
  const formattedDate = format(new Date(event.fields.Date), "MMMM do ");
  return (
    <Link href={`/calendar/${event.id}`}>
      <FlexContainer>
        <StyledCard>
          <Title>
            {formattedDate}, {event.fields.Time_Formatted}
          </Title>
          <Description>{event.fields.Name}</Description>
        </StyledCard>
      </FlexContainer>
    </Link>
  );
};
