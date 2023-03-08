import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import { getFirstEventIds } from "../../utils";
import { useGetEvents } from "../../utils/query/useGetEvents";
import {
  ParallaxBannerHeader,
  ParallaxText,
  ParallaxTextContainer,
  Title,
} from "../common/styles";
import { CalendarCard } from "./CalendarCard";
import HouseFront from "../../public/home/house_front.jpg";
import { Header } from "../common";

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
