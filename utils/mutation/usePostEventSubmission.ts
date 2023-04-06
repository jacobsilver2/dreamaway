import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_EVENT_SUBMISSION_URL } from "../constant";
import { EventSubmissionBean } from "../types";

export const usePostEventSubmission = () => {
  return useMutation((eventSubmissionBean: EventSubmissionBean) =>
    axios.post(`${AIRTABLE_EVENT_SUBMISSION_URL}`, {
      fields: eventSubmissionBean,
    })
  );
};
