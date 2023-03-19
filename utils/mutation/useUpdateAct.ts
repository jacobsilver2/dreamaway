import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_ACT_URL } from "../constant";
import { ActInput } from "../types";

export const useUpdateAct = () => {
  const { mutate, isLoading, error } = useMutation(
    ({ id, data }: { id: string; data: ActInput }) =>
      axios.patch(
        AIRTABLE_ACT_URL,
        {
          records: [
            {
              id,
              fields: {
                Name: data.Name,
                First_Name: data.First_Name[0],
                Last_Name: data.Last_Name[0],
                Blurb: data.Blurb,
                Url: data.Url,
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
