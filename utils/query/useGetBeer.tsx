import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_RESTAURANT_BEER_URL, DEFAULT_PAGE_SIZE } from "../constant";
import { BeerBean } from "../types";

export const useGetBeer = () => {
  const { data, error, isLoading } = useInfiniteQuery<{
    data: {
      records: BeerBean[];
      offset?: string;
    };
  }>(
    ["beer"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_RESTAURANT_BEER_URL}?PageSize=${DEFAULT_PAGE_SIZE}${
          pageParam ? `&offset=${pageParam}` : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      ),
    {
      getNextPageParam: (lastPage) => lastPage.data.offset,
    }
  );

  const beer = data?.pages?.map((page) => page.data.records).flat();

  return {
    beer,
    error,
    isLoading,
  };
};
