import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAirtableEventUrl } from "../helpers";
import { EventBean } from "../types";

export const useGetEvent = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useQuery<{ data: EventBean }>(
    ["event", id],
    () => axios.get(getAirtableEventUrl(id))
  );

  const event = data?.data;

  return {
    event,
    error,
    isLoading,
  };
};
