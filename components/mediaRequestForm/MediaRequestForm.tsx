import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledFormContainer, StyledRequired } from "../common/styles";
import { useGetEvent } from "../../utils/query/useGetEvent";
import { useUpdateAct, useUpdateEvent } from "../../utils/mutation";
import Image from "next/image";

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
  image: string;
};

export const MediaRequestForm = () => {
  const [loadingCloudinary, setLoadingCloudinary] = useState(false);
  const [submittingAirtable, setSubmittingAirtable] = useState(false);
  const {
    push,
    query: { eventId, actId },
  } = useRouter();

  const { event, error, isLoading } = useGetEvent({ id: eventId as string });
  const { mutate: updateEvent } = useUpdateEvent();
  const { mutate: updateAct } = useUpdateAct();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({
    firstName,
    lastName,
    actName,
    website,
    blurb,
    image,
  }) => {
    setSubmittingAirtable(true);
    updateEvent(
      {
        id: eventId as string,
        name: actName,
      },
      {
        onSuccess: () => {
          updateAct(
            {
              id: actId as string,
              data: {
                Name: actName,
                First_Name: firstName,
                Last_Name: lastName,
                Blurb: blurb,
                Url: website,
                Image: image,
              },
            },
            {
              onSuccess: () => {
                setSubmittingAirtable(false);
                push("/thankyou");
              },
              onError: (error) => {
                setSubmittingAirtable(false);
                console.log("act update error", error);
              },
            }
          );
        },
        onError: (error) => {
          console.log("event update error", error);
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
        image: event.fields.act_image[0].url,
      });
      // setValue("email", event.fields.act_email[0]);
      // setValue("blurb", event.fields.act_blurb[0]);
      // setValue("website", event.fields.act_url[0]);
      // setValue("actName", event.fields.Name);
      // setValue("firstName", event.fields.act_firstName);
      // setValue("lastName", event.fields.act_lastName);
      // setValue("time", event.fields.Time_Formatted);
      // setValue("image", event.fields.act_image[0].url);
      // setValue("date", event.fields.Date_UTC);
    }
  }, [event, reset]);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files && !e.target.files[0]) {
      return;
    }
    if (!e.target.files[0]?.type?.match("image.*")) {
      alert("File must be an image");
      return;
    }
    if (e.target.files[0].size > 5000000) {
      alert("File size must be less than 5MB");
      return;
    }

    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "dreamaway-act-images");
    setLoadingCloudinary(true);

    fetch("https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setValue("image", data.secure_url);
        setLoadingCloudinary(false);
      })
      .catch((err) => {
        setLoadingCloudinary(false);
      });
  };

  const isLoadingForm = isLoading || loadingCloudinary;

  return (
    <>
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
            <input
              placeholder="Website"
              id="website"
              {...register("website")}
            />

            <label htmlFor="blurb">Message</label>
            <textarea
              rows={10}
              placeholder="Blurb"
              id="blurb"
              {...(register("blurb"), { required: false, maxLength: 10 })}
            />
            {errors.blurb && (
              <StyledRequired>Max Length of 500 characters</StyledRequired>
            )}

            <label htmlFor="image">
              Image (.jpg, .png or .gif. Max size 5MB)
            </label>
            <input
              placeholder="Image"
              type="file"
              name="image"
              accept="image/gif, image/jpeg, image/png"
              multiple={false}
              id="image"
              disabled={isLoadingForm}
              onChange={onImageChange}
            />
            {loadingCloudinary && <p>Uploading Image...</p>}
            {getValues("image") && (
              // <Image src={getValues("image")} alt="act" width={200} />
              <img src={getValues("image")} alt="act" width={200} />
            )}
            <input
              disabled={isLoadingForm || submittingAirtable}
              type="submit"
              value={submittingAirtable ? "Submitting" : "Submit"}
            />
          </StyledFormContainer>
        </form>
      </Container>
    </>
  );
};
