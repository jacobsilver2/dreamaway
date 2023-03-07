import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostBookingSubmission } from "../../utils/query/usePostBookingSubmission";
import { useRouter } from "next/router";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  margin: 0 auto;
  min-width: ${({ theme }) => theme.sizes.maxWidthCentered};
  max-width: ${({ theme }) => theme.sizes.maxWidthCentered};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  label {
    margin: 1rem 0;
    font-size: 1rem;
    align-self: flex-start;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
    &:focus {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      outline: ${({ theme }) => theme.colors.yellow} auto 5px;
    }
  }
  select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
    &:focus {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      outline: ${({ theme }) => theme.colors.yellow} auto 5px;
    }
  }
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
    &:focus {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      outline: ${({ theme }) => theme.colors.yellow} auto 5px;
    }
  }
  input[type="submit"] {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 500;
    width: 100%;
    height: 5rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 1rem 0;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`;

const StyledRequired = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
`;

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
          rows={10}
          placeholder="Message"
          id="website4"
          {...register("message")}
        />
        <input type="submit" />
      </StyledFormContainer>
    </form>
  );
};
