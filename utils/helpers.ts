export const getFirstEventIds = (events) => {
  let prevDate = "";
  const firstEventsOfTheDay = [];
  events.forEach((event) => {
    // if (!moment(event.fields.Date).isSame(prevDate, "day")) {
    //   firstEventsOfTheDay.push(event.id);
    // }
    if (event.fields.Date !== prevDate) {
      firstEventsOfTheDay.push(event.id);
    }
    prevDate = event.fields.Date;
  });
  return firstEventsOfTheDay;
};

export const getAirtableEventUrl = (id) =>
  `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/events/${id}?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;
