import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_BOOKING_SUBMISSION_URL } from "../constant";
import { BookingSubmissionInputBean } from "../types";

export const usePostBookingSubmission = () => {
  return useMutation((bookingSubmissionInputBean: BookingSubmissionInputBean) =>
    axios.post(`${AIRTABLE_BOOKING_SUBMISSION_URL}`, {
      fields: bookingSubmissionInputBean,
    })
  );
};
