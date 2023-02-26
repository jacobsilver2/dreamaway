import { useRouter } from "next/router";
import styled from "styled-components";
import { CircleLoader } from "react-spinners";
import { useGetEvent } from "../../../utils/query/useGetEvent";
import { EventCard } from "./EventCard";

const StyledBackButton = styled.button`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

export const Event = ({ id }: { id: string }) => {
  const { event, isLoading } = useGetEvent({ id });
  const { back } = useRouter();

  return (
    <>
      <StyledBackButton onClick={() => back()}>BACK</StyledBackButton>
      {isLoading ? <CircleLoader /> : <EventCard event={event} />}
    </>
  );
};
