import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_FAQ_URL } from "../constant";
import { FaqBean } from "../types";

export const useGetFaq = () => {
  const { data, error, isLoading } = useInfiniteQuery<{
    data: {
      records: FaqBean[];
      offset?: string;
    };
  }>(
    ["faq"],
    ({ pageParam }) =>
      axios.get(
        `${AIRTABLE_FAQ_URL}?PageSize=${50}${
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

  const faq = data?.pages
    ?.map((page) => page.data.records)
    .flat()
    .filter((record) => record.fields.visible)
    .sort((a, b) => a.fields.order - b.fields.order);

  return {
    faq,
    error,
    isLoading,
  };
};
