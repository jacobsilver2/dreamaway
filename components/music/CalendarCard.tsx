import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Title } from "../common/styles";
import { EventBean } from "../../utils";

export const FlexContainer = styled.div`
  display: flex;
  max-width: 800px;
`;

export const StyledCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-decoration: none;
  transition: color 0.25s ease, border-color 0.15s ease;

  &:hover,
  :focus,
  :active {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

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
              <h3>{event.fields.Name}</h3>
            </div>
          </StyledCard>
        </FlexContainer>
      </Link>
    </>
  );
};
