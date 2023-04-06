import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { usePostShootSubmission } from "../../utils/mutation";
import { StyledFormContainer, StyledRequired } from "../common/styles";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  crew: string;
  type: string;
  date: string;
  hours: string;
  start_time: string;
  production_name: string;
  production_company: string;
  location: string;
  vehicles: string;
  additional_info: string;
};

export const ShootForm = () => {
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
    resetField("name");
    resetField("phone");
    resetField("email");
    resetField("crew");
    resetField("type");
    resetField("date");
    resetField("hours");
    resetField("start_time");
    resetField("production_name");
    resetField("production_company");
    resetField("location");
    resetField("vehicles");
    resetField("additional_info");
  };

  const { mutate: submitBookingRequest, isLoading } = usePostShootSubmission();
  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    phone,
    email,
    type,
    date,
    hours,
    start_time,
    production_name,
    production_company,
    location,
    vehicles,
    additional_info,
    crew,
  }) =>
    submitBookingRequest(
      {
        name,
        phone,
        email,
        type,
        date,
        hours,
        start_time,
        production_name,
        production_company,
        location,
        vehicles,
        additional_info,
        crew,
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
        <label htmlFor="name">First Name*</label>
        <input
          placeholder="First and Last Name"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <StyledRequired>This field is required</StyledRequired>}

        <label htmlFor="phone">Phone</label>
        <input placeholder="Phone Number" id="phone" {...register("phone")} />

        <label htmlFor="email">Email*</label>
        <input
          id="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <StyledRequired>This field is required</StyledRequired>
        )}

        <label htmlFor="crew">Total number of cast and crew</label>
        <input
          placeholder="Total number of cast and crew"
          id="crew"
          {...register("crew")}
        />

        <label htmlFor="type">Type of shoot (film/video/still)</label>
        <input
          placeholder="Type of shoot (film/video/still)"
          id="type"
          {...register("type", { required: true })}
        />
        {errors.type && <StyledRequired>This field is required</StyledRequired>}

        <label htmlFor="date">Desired Date</label>
        <input placeholder="Desired Date" id="date" {...register("date")} />

        <label htmlFor="hours">Number of Hours</label>
        <input
          placeholder="Number of Hours"
          id="hours"
          {...register("hours")}
        />

        <label htmlFor="startTime">Start Time</label>
        <input
          placeholder="Start time"
          id="startTime"
          {...register("start_time")}
        />

        <label htmlFor="production_name">Production Name</label>
        <input
          placeholder="production name"
          id="production_name"
          {...register("production_name")}
        />

        <label htmlFor="production_company">Production Company</label>
        <input
          placeholder="production company"
          id="production_company"
          {...register("production_company")}
        />

        <label htmlFor="location">
          Where would you like to shoot (music room, bar, dining room, outdoors)
        </label>
        <input
          placeholder="Where would you like to shoot (music room, bar, dining room, outdoors)"
          id="location"
          {...register("location")}
        />

        <label htmlFor="vehicles">
          How many vehicles associated with shoot
        </label>
        <input
          placeholder="How many vehicles associated with shoot
"
          id="vehicles"
          {...register("vehicles")}
        />

        <label htmlFor="additional_info">Additional Info</label>
        <textarea
          style={{ resize: "none" }}
          rows={10}
          placeholder="additional info"
          id="additional_info"
          {...register("additional_info")}
        />

        <input type="submit" value={isLoading ? "Submitting..." : "Submit"} />
      </StyledFormContainer>
    </form>
  );
};
