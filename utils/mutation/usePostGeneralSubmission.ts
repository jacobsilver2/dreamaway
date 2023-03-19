import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_BOOKING_SUBMISSION_URL } from "../constant";
import { GeneralSubmissionInputBean } from "../types";

export const usePostGeneralSubmission = () => {
  return useMutation((bookingSubmissionInputBean: GeneralSubmissionInputBean) =>
    axios.post(`${AIRTABLE_BOOKING_SUBMISSION_URL}`, {
      fields: bookingSubmissionInputBean,
    })
  );
};
