import styled from "styled-components";
import Image from "next/image";
import { EventBean } from "../../utils";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tonight = ({ event }: { event: EventBean }) => (
  <Link href={`/calendar/${event.id}`}>
    <Container>
      <h1>
        {event.fields.Time_Formatted} - {event.fields.Name}
      </h1>
      <Image
        sizes={"(max-width: 600px) 100vw"}
        width={300}
        height={300}
        src={event.fields.act_image[0].url}
        alt={event.fields.Name}
      />
    </Container>
  </Link>
);
