import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_RESTAURANT_FOOD_URL, DEFAULT_PAGE_SIZE } from "../constant";
import { FoodBean } from "../types";

export const useGetFood = () => {
  const { data, error, isLoading } = useInfiniteQuery<{
    data: {
      records: FoodBean[];
      offset?: string;
    };
  }>(
    ["food"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_RESTAURANT_FOOD_URL}?PageSize=${DEFAULT_PAGE_SIZE}${
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

  const food = data?.pages?.map((page) => page.data.records).flat();

  return {
    food,
    error,
    isLoading,
  };
};
