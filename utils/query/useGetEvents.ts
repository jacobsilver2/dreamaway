import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_EVENTS_URL, DEFAULT_PAGE_SIZE } from "../constant";

type Event = {
  id: string;
  fields: {
    Name: string;
    Date: string;
    Date_UTC: string;
    Time_Formatted: string;
  };
};

export const useGetEvents = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<{
    data: {
      records: Event[];
      offset?: string;
    };
  }>(
    ["events"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_EVENTS_URL}&view=Future&pageSize=${DEFAULT_PAGE_SIZE}${
          pageParam ? `&offset=${pageParam}` : ""
        }`
      ),
    {
      getNextPageParam: (lastPage) => lastPage.data.offset,
    }
  );

  const events = data?.pages?.map((page) => page.data.records).flat();

  return {
    events,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};
