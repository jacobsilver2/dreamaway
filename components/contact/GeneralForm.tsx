import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { usePostGeneralSubmission } from "../../utils/mutation";
import { StyledFormContainer, StyledRequired } from "../common/styles";
import { getEmailError } from "../../utils";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export const GeneralForm = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    clearErrors,
    resetField,
    formState: { errors },
  } = useForm<Inputs>();

  const clearForm = () => {
    clearErrors();
    resetField("firstName");
    resetField("lastName");
    resetField("email");
    resetField("message");
  };

  const { mutate: submitBookingRequest, isLoading } =
    usePostGeneralSubmission();
  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    firstName,
    lastName,
    message,
  }) =>
    submitBookingRequest(
      {
        firstName,
        lastName,
        email,
        message,
      },
      {
        onSuccess: () => {
          clearForm();
          push("/thankyou");
        },
        onError: () => {
          console.log("error");
        },
      }
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormContainer>
        <h3>General</h3>
        <label htmlFor="firstName">First Name</label>
        <input
          placeholder="First Name"
          id="firstName"
          {...register("firstName")}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          placeholder="Last Name"
          id="lastName"
          {...register("lastName")}
        />

        <label htmlFor="email">Email*</label>
        <input
          id="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <StyledRequired>{getEmailError(errors.email)}</StyledRequired>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          style={{ resize: "none" }}
          rows={10}
          placeholder="Message"
          id="website4"
          {...register("message")}
        />

        <input type="submit" value={isLoading ? "Submitting..." : "Submit"} />
      </StyledFormContainer>
    </form>
  );
};
