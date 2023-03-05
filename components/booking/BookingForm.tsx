import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  padding: 2rem;
  margin: 0 auto;
  min-width: 400px;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  label {
    margin: 1rem 0;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
  }
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    margin: 0.5rem 0;
  }
  input[type="submit"] {
    background-color: #fff;
    color: #000;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 1rem 0;
    cursor: pointer;
  }
`;

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  actName: string;
  numberOfBandMembers: string;
  website1: string;
  website2: string;
  website3: string;
  message: string;
};

export const BookingForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("numberOfBandMembers"));

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
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="actName">Act Name</label>
        <input
          placeholder="Act Name"
          id="actName"
          {...register("actName", { required: true })}
        />
        {errors.actName && <span>This field is required</span>}
        <label htmlFor="numberOfBandMembers">Number of Band Members</label>
        <input
          id="numberOfBandMembers"
          type="number"
          {...register("numberOfBandMembers", {
            required: true,
          })}
        />
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
          placeholder="message"
          id="website4"
          {...register("message")}
        />
        <input type="submit" />
      </StyledFormContainer>
    </form>
  );
};
