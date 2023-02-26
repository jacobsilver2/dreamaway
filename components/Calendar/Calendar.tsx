import InfiniteScroll from "react-infinite-scroll-component";
import { useGetEvents } from "../../utils/query/useGetEvents";
import { CalendarCard } from "./CalendarCard";

export const Calendar = () => {
  const { events, fetchNextPage, hasNextPage } = useGetEvents();

  const renderEvents = events?.map((event) => (
    <CalendarCard key={event.id} event={event} />
  ));
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
