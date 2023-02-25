import { useEffect, useState } from "react";
import Link from "next/link";
import events from "../../pages/api/events";
import { eventsTable } from "../../utils/Airtable";

const Calendar = ({ initialEvents }) => {
  const events = initialEvents?.map((event) => (
    <li
      key={event.id}
    >{`${event.fields.Date_UTC}-${event.fields.Time_Formatted}-${event.fields.Name}`}</li>
  ));

  return (
    <>
      <h1>Calendar</h1>
      <ul>{events}</ul>
    </>
  );
};

export default Calendar;

export const getServerSideProps = async () => {
  try {
    const items = await eventsTable.select({}).firstPage();
    return {
      props: {
        initialEvents: JSON.parse(JSON.stringify(items)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: "Something went wrong 😕",
      },
    };
  }
};
