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
