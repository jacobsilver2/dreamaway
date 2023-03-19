import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_EVENTS_URL, DEFAULT_PAGE_SIZE } from "../constant";
import { EventBean } from "../types";

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
      records: EventBean[];
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

export const useGetTodayEvents = () => {
  const { data, isLoading, error } = useQuery<{
    data: { records: EventBean[] };
  }>(["todayEvents"], () => axios.get(`${AIRTABLE_EVENTS_URL}&view=Today`));

  return {
    todayEvents: data?.data.records,
    isLoading,
    error,
  };
};

export const useGetEventsOfRange = ({
  before,
  after,
}: {
  before: string;
  after: string;
}) => {
  const { data, isLoading, error } = useQuery<{
    data: { records: EventBean[] };
  }>(["eventsOfRange", `${after}-${before}`], () =>
    axios.get(
      `${AIRTABLE_EVENTS_URL}&filterByFormula=AND(IS_AFTER(%7BDate%7D%2C+'${after}')%2CIS_BEFORE(%7BDate%7D%2C+'${before}'))`
    )
  );

  return {
    eventsOfRange: data?.data.records,
    isLoading,
    error,
  };
};

export const useGetNextEvent = () => {
  const { data, isLoading, error } = useQuery<{
    data: { records: EventBean[] };
  }>(["nextEvent"], () =>
    axios.get(`${AIRTABLE_EVENTS_URL}&view=Future&pageSize=1`)
  );

  return {
    nextEvent: data?.data.records[0],
    isLoading,
    error,
  };
};
