import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AIRTABLE_RESTAURANT_COCKTAILS_URL,
  DEFAULT_PAGE_SIZE,
} from "../constant";
import { CocktailBean } from "../types";

export const useGetCocktails = () => {
  const { data, error, isLoading } = useInfiniteQuery<{
    data: {
      records: CocktailBean[];
      offset?: string;
    };
  }>(
    ["cocktails"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_RESTAURANT_COCKTAILS_URL}?PageSize=${DEFAULT_PAGE_SIZE}${
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

  const cocktails = data?.pages?.map((page) => page.data.records).flat();

  return {
    cocktails,
    error,
    isLoading,
  };
};
