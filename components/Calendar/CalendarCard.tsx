import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Description, Title } from "../common/styles";
import { EventBean } from "../../utils";

export const FlexContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-flow: column wrap; */
  max-width: 800px;
  margin: 3rem 0;
`;

export const StyledCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 8px;
  transition: color 0.25s ease, border-color 0.15s ease;

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

export const CalendarCard = ({
  event,
  isFirstEventOfDay,
}: {
  event: EventBean;
  isFirstEventOfDay: boolean;
}) => {
  const formattedDate = format(new Date(event.fields.Date), "MMMM do ");
  return (
    <>
      {isFirstEventOfDay && <Title>{formattedDate}</Title>}
      <Link href={`/calendar/${event.id}`}>
        <FlexContainer>
          <StyledCard>
            <Image
              src={event.fields.act_image[0].thumbnails.large.url}
              alt={event.fields.Name}
              width={300}
              height={300}
              style={{ borderRadius: "8px 0 0 8px" }}
            />
            <div>
              <Description>
                <b>{event.fields.Time_Formatted}</b>
              </Description>
              <Description>{event.fields.Name}</Description>
            </div>
          </StyledCard>
        </FlexContainer>
      </Link>
    </>
  );
};
