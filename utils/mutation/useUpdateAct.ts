import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_ACT_URL } from "../constant";
import { ActInput } from "../types";

export const useUpdateAct = () => {
  const { mutate, isLoading, error } = useMutation(
    ({ id, data }: { id: string; data: ActInput }) => {
      return axios.patch(
        AIRTABLE_ACT_URL,
        {
          records: [
            {
              id,
              fields: {
                Name: data.Name,
                First_Name: Array.isArray(data.First_Name)
                  ? data.First_Name[0]
                  : data.First_Name,
                Last_Name: Array.isArray(data.Last_Name)
                  ? data.Last_Name[0]
                  : data.Last_Name,
                Blurb: data.Blurb,
                Url: data.Url,
                Image: [{ url: data.Image }],
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
      );
    }
  );

  return {
    mutate,
    isLoading,
    error,
  };
};
