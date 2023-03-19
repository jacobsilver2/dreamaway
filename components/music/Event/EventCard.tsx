import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { CircleLoader } from "react-spinners";
import { format } from "date-fns";
import {
  EventBean,
  EVENT_IMAGE_HEIGHT,
  EVENT_IMAGE_WIDTH,
  getFullDate,
} from "../../../utils";
import { Description } from "../../common/styles";

const StyledImageContainer = styled.div`
  justify-self: center;
  position: relative;
  width: ${EVENT_IMAGE_WIDTH}px;
  height: ${EVENT_IMAGE_HEIGHT}px;

  @media (max-width: ${({ theme }) => theme.sizes.mobileBreakpoint}) {
    width: calc(100vw - 1.5rem);
    height: 50vh;
  }
`;

const DateOverlay = styled.div`
  z-index: 2;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
    padding: 0;
  }
`;

export const EventCard = ({
  event,
  loading,
  displayImage,
  displaySubDate,
}: {
  event: EventBean;
  loading: boolean;
  displayImage: boolean;
  displaySubDate?: boolean;
}) => {
  if (loading) return <CircleLoader />;

  const monthShort = format(new Date(event?.fields?.Date), "MMM");
  const day = format(new Date(event?.fields?.Date), "d");
  const fullDate = getFullDate(event?.fields?.Date);
  return (
    <>
      {displayImage && (
        <StyledImageContainer>
          <DateOverlay>
            <div>{monthShort}</div>
            <div>{day}</div>
          </DateOverlay>
          <Link href={`/music/${event?.id}`}>
            <Image
              src={event?.fields.act_image[0].url}
              alt={event?.fields.act_image[0].filename}
              fill
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Link>
        </StyledImageContainer>
      )}
      <h3>{event?.fields.Name}</h3>
      <Description>
        <StyledUL>
          <li>
            <b>
              ***TWO SETS: 9PM & 10:15PM*** ***$10 (CASH) SUGGESTED DONATION***
            </b>
          </li>
          <li>
            <b>
              ***LUNATICO HAS A FULL DINNER AND COCKTAIL MENU SO COME EARLY TO
              EAT!***
            </b>
          </li>
        </StyledUL>
      </Description>
      <Description>{event?.fields.act_blurb}</Description>
      {displaySubDate && <Description grey>{fullDate}</Description>}
    </>
  );
};
