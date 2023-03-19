import styled from "styled-components";
import { CircleLoader } from "react-spinners";
import { useGetEvent } from "../../../utils/query/useGetEvent";
import { EventCard } from "./EventCard";

export const Event = ({ id }: { id: string }) => {
  const { event, isLoading } = useGetEvent({ id });

  return (
    <>
      {isLoading ? (
        <CircleLoader />
      ) : (
        <EventCard
          displaySubDate={false}
          displayImage={false}
          loading={isLoading}
          event={event}
        />
      )}
    </>
  );
};
