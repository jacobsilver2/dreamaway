import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledFormContainer, StyledRequired } from "../common/styles";
import { useGetEvent } from "../../utils/query/useGetEvent";
import { useUpdateAct, useUpdateEvent } from "../../utils/mutation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

type Inputs = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  actName: string;
  website: string;
  blurb: string;
};

export const MediaRequestForm = () => {
  const {
    push,
    query: { eventId, actId },
  } = useRouter();

  // const { event, error, isLoading } = useGetEvent({ id: eventId as string });
  const { event, error, isLoading } = useGetEvent({ id: "recLIkJYui8tNcRz8" });
  const { mutate: updateEvent } = useUpdateEvent();
  const { mutate: updateAct } = useUpdateAct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({
    firstName,
    lastName,
    actName,
    website,
    blurb,
  }) => {
    updateEvent(
      {
        // id: eventId as string,
        id: "recLIkJYui8tNcRz8",
        name: actName,
      },
      {
        onSuccess: () => {
          updateAct(
            {
              // id: actId as string,
              id: "recObK4aDF4pC4mPu",
              data: {
                Name: actName,
                First_Name: firstName,
                Last_Name: lastName,
                Blurb: blurb,
                Url: website,
              },
            },
            {
              onSuccess: () => {
                push("/thankyou");
              },
            }
          );
        },
      }
    );
  };

  useEffect(() => {
    if (event) {
      reset({
        email: event.fields.act_email[0],
        blurb: event.fields.act_blurb[0],
        website: event.fields.act_url[0],
        actName: event.fields.Name,
        firstName: event.fields.act_firstName,
        lastName: event.fields.act_lastName,
        date: event.fields.Date_UTC,
        time: event.fields.Time_Formatted,
      });
    }
  }, [event, reset]);

  return (
    <Container>
      <h1>Media Request Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormContainer>
          <label htmlFor="date">Date Of Show</label>
          <input id="date" {...register("date")} disabled />
          <label htmlFor="time">Time Of Show</label>
          <input id="time" {...register("time")} disabled />
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
            disabled
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
          <label htmlFor="website">Website 1</label>
          <input placeholder="Website" id="website" {...register("website")} />
          <label htmlFor="blurb">Message</label>
          <textarea
            rows={10}
            placeholder="Blurb"
            id="blurb"
            {...register("blurb")}
          />
          <input type="submit" />
        </StyledFormContainer>
      </form>
    </Container>
  );
};
