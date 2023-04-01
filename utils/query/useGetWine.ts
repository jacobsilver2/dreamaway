import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AIRTABLE_RESTAURANT_FOOD_URL,
  AIRTABLE_RESTAURANT_WINE_URL,
  DEFAULT_PAGE_SIZE,
} from "../constant";
import { WineBean } from "../types";

export const useGetWine = () => {
  const { data, error, isLoading } = useInfiniteQuery<{
    data: {
      records: WineBean[];
      offset?: string;
    };
  }>(
    ["wine"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_RESTAURANT_WINE_URL}?PageSize=${DEFAULT_PAGE_SIZE}${
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

  const wine = data?.pages?.map((page) => page.data.records).flat();

  return {
    wine,
    error,
    isLoading,
  };
};
