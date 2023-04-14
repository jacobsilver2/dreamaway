import { format, isSameDay } from "date-fns";
import { EventBean } from "./types";
import { FieldError } from "react-hook-form";
import RoosterImage from "../public/contact/rooster_compressed_1600.jpeg";
import CandelabraImage from "../public/events/candelabra_compressed_1600.jpeg";

export const getFirstEventIds = ({ events }: { events: EventBean[] }) => {
  let prevDate = "";
  const firstEventsOfTheDay = events?.reduce((acc, event) => {
    if (!isSameDay(new Date(event.fields.Date), new Date(prevDate))) {
      acc.push(event.id);
    }
    prevDate = event.fields.Date;
    return acc;
  }, []);

  return firstEventsOfTheDay;
};

export const getAirtableEventUrl = (id) =>
  `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/events/${id}?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;

export const getFullDate = (date: string) =>
  format(new Date(date), "E, MMM d yyyy");

export const getEmailError = (error?: FieldError) => {
  if (error?.type === "required") return "This Field Is Required";
  if (error?.type === "pattern") return "Please enter a valid email address";
  return null;
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const getRandomImage = () => {
  const images = [RoosterImage, CandelabraImage];
  return images[Math.floor(Math.random() * images.length)];
};
