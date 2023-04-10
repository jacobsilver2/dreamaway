import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { usePostEventSubmission } from "../../utils/mutation";
import { StyledFormContainer, StyledRequired } from "../common/styles";
import { getEmailError } from "../../utils";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  people: string;
  date: string;
  time: string;
  hours: string;
  location: "inside" | "outside" | "inside and outside";
  bar: "open" | "beerAndWine" | "full" | "deluxe";
  occasion: "string";
  additional_info: "string";
};

export const EventForm = () => {
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
    resetField("people");
    resetField("date");
    resetField("time");
    resetField("hours");
    resetField("location");
    resetField("bar");
    resetField("occasion");
    resetField("additional_info");
  };

  const { mutate: submitBookingRequest, isLoading } = usePostEventSubmission();
  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    phone,
    email,
    people,
    date,
    time,
    hours,
    location,
    bar,
    occasion,
    additional_info,
  }) =>
    submitBookingRequest(
      {
        name,
        phone,
        email,
        people,
        date,
        time,
        hours,
        location,
        bar,
        occasion,
        additional_info,
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
        <label htmlFor="name">Name*</label>
        <input
          placeholder="First and Last Name"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <StyledRequired>This field is required</StyledRequired>}

        <label htmlFor="email">Email*</label>
        <input
          id="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <StyledRequired>{getEmailError(errors.email)}</StyledRequired>
        )}

        <label htmlFor="phone">Phone</label>
        <input placeholder="Phone Number" id="phone" {...register("phone")} />

        <label htmlFor="people">How many people?*</label>
        <input
          placeholder="How many people"
          id="people"
          {...register("people", { required: true })}
        />
        {errors.people && (
          <StyledRequired>This field is required</StyledRequired>
        )}

        <label htmlFor="date">Desired Date*</label>
        <input
          placeholder="Desired Date"
          id="date"
          {...register("date", { required: true })}
        />
        {errors.date && <StyledRequired>This field is required</StyledRequired>}

        <label htmlFor="time">What time?</label>
        <input placeholder="What time?" id="time" {...register("time")} />

        <label htmlFor="hours">How many hours?*</label>
        <input
          placeholder="How many hours"
          id="hours"
          {...register("hours", { required: true })}
        />
        {errors.hours && (
          <StyledRequired>This field is required</StyledRequired>
        )}

        <label htmlFor="location">Inside, outside or both?</label>
        <select id="location" {...register("location", { required: true })}>
          <option>Inside</option>
          <option>Outside</option>
          <option>Inside & Outside</option>
        </select>
        {errors.location && (
          <StyledRequired>This field is required</StyledRequired>
        )}

        <label htmlFor="bar">Open bar or cash bar?</label>
        <select id="bar" {...register("bar", { required: true })}>
          <option>Cash bar</option>
          <option>Beer/Wine Open Bar $13/hr per person</option>
          <option>Full Open Bar $17/hr per person</option>
          <option>Deluxe Open Bar $19/hr per person</option>
        </select>
        {errors.bar && <StyledRequired>This field is required</StyledRequired>}

        <label htmlFor="occasion">What&apos;s the occasion?</label>
        <textarea
          style={{ resize: "none" }}
          rows={10}
          placeholder="What's the occasion?"
          id="occasion"
          {...register("occasion")}
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
