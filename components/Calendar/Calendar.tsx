import InfiniteScroll from "react-infinite-scroll-component";
import { getFirstEventIds } from "../../utils";
import { useGetEvents } from "../../utils/query/useGetEvents";
import { CalendarCard } from "./CalendarCard";

export const Calendar = () => {
  const { events, fetchNextPage, hasNextPage } = useGetEvents();
  const firstEvents = getFirstEventIds({ events });

  const renderEvents = events?.map((event) => (
    <CalendarCard
      key={event.id}
      event={event}
      isFirstEventOfDay={firstEvents.includes(event.id)}
    />
  ));
  return (
    <>
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
