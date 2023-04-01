import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AIRTABLE_RESTAURANT_SPIRIT_FREE_URL,
  DEFAULT_PAGE_SIZE,
} from "../constant";
import { SpiritFreeBean } from "../types";

export const useGetSpiritFree = () => {
  const { data, error, isLoading } = useInfiniteQuery<{
    data: {
      records: SpiritFreeBean[];
      offset?: string;
    };
  }>(
    ["spiritFree"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_RESTAURANT_SPIRIT_FREE_URL}?PageSize=${DEFAULT_PAGE_SIZE}${
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

  const spiritFree = data?.pages?.map((page) => page.data.records).flat();

  return {
    spiritFree,
    error,
    isLoading,
  };
};
