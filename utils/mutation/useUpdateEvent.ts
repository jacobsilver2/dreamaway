import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_EVENT_URL } from "../constant";
import { EventBean } from "../types";

type UpdateEventInput = {
  id: EventBean["id"];
  name: EventBean["fields"]["Name"];
};

export const useUpdateEvent = () => {
  const { mutate, isLoading, error } = useMutation((data: UpdateEventInput) =>
    axios.patch(
      AIRTABLE_EVENT_URL,
      {
        records: [
          {
            id: data.id,
            fields: {
              Name: data.name,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
  );

  return {
    mutate,
    isLoading,
    error,
  };
};
