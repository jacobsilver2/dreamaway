import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostBookingSubmission } from "../../utils/mutation";
import { useRouter } from "next/router";
import { StyledFormContainer, StyledRequired } from "../common/styles";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  actName: string;
  numberOfBandMembers: "1" | "2" | "3" | "4" | "5 or more";
  website1: string;
  website2: string;
  website3: string;
  message: string;
};

export const BookingForm = () => {
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
    resetField("actName");
    resetField("numberOfBandMembers");
    resetField("website1");
    resetField("website2");
    resetField("website3");
    resetField("message");
  };

  const { mutate: submitBookingRequest } = usePostBookingSubmission();
  const onSubmit: SubmitHandler<Inputs> = ({
    actName,
    email,
    firstName,
    lastName,
    message,
    numberOfBandMembers,
    website1,
    website2,
    website3,
  }) =>
    submitBookingRequest(
      {
        firstName,
        lastName,
        email,
        act_name: actName,
        number_of_band_members: numberOfBandMembers,
        website_1: website1,
        website_2: website2,
        website_3: website3,
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <StyledRequired>This field is required</StyledRequired>
        )}
        <label htmlFor="actName">Act Name</label>
        <input
          placeholder="Act Name"
          id="actName"
          {...register("actName", { required: true })}
        />
        {errors.actName && (
          <StyledRequired>This field is required</StyledRequired>
        )}
        <label htmlFor="numberOfBandMembers">Number of Band Members</label>
        <select
          id="numberOfBandMembers"
          {...register("numberOfBandMembers", { required: true })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5 or more</option>
        </select>
        {errors.numberOfBandMembers && <span>This field is required</span>}
        <label htmlFor="website1">Website 1</label>
        <input
          placeholder="Website 1"
          id="website1"
          {...register("website1")}
        />
        <label htmlFor="website2">Website 2</label>
        <input
          placeholder="Website 2"
          id="website2"
          {...register("website2")}
        />
        <label htmlFor="website3">Website 3</label>
        <input
          placeholder="Website 3"
          id="website3"
          {...register("website3")}
        />
        <label htmlFor="message">Message</label>
        <textarea
          style={{ resize: "none" }}
          rows={10}
          placeholder="Message"
          id="message"
          {...register("message")}
        />
        <input type="submit" />
      </StyledFormContainer>
    </form>
  );
};
