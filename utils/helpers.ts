import { format, isSameDay } from "date-fns";
import { EventBean } from "./types";

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
