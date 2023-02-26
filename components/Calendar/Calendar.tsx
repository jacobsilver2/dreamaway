import InfiniteScroll from "react-infinite-scroll-component";
import { useGetEvents } from "../../utils/query/useGetEvents";
import { EventCard } from "./EventCard";

export const Calendar = () => {
  const { events, fetchNextPage, hasNextPage } = useGetEvents();

  const renderEvents = events?.map(
    ({ id, fields: { Name, Date_UTC, Time_Formatted } }) => (
      <EventCard key={id} name={Name} date={Date_UTC} time={Time_Formatted} />
    )
  );
  return (
    <>
      <h1>Calendar</h1>
      <InfiniteScroll
        dataLength={events?.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {renderEvents}
      </InfiniteScroll>
    </>
  );
};
