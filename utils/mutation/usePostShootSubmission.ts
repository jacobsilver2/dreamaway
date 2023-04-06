import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AIRTABLE_SHOOTS_SUBMISSION_URL } from "../constant";
import { ShootsSubmissionBean } from "../types";

export const usePostShootSubmission = () => {
  return useMutation((shootSubmissionInputBean: ShootsSubmissionBean) =>
    axios.post(`${AIRTABLE_SHOOTS_SUBMISSION_URL}`, {
      fields: shootSubmissionInputBean,
    })
  );
};
