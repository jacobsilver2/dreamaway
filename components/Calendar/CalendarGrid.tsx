import { useState } from "react";
import styled from "styled-components";
import { EventBean } from "../../utils";
import {
  endOfMonth,
  getDay,
  getDaysInMonth,
  startOfMonth,
  eachDayOfInterval,
  format,
  sub,
  add,
  isSameDay,
} from "date-fns";
import { useGetEventsOfRange } from "../../utils/query";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Toolbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Month = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.5rem;
`;

const Day = styled.div`
  position: relative;
  background: #fff;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  aspect-ratio: 1;
  transition: all 0.2s ease-in-out;
`;

const DayNumber = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  width: 2rem;
  height: 2rem;
  background: #fff;
  display: flex;
  font-size: 0.8rem;
  color: #333;
  z-index: 2;
`;

const DayInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DayLabels = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  p {
    text-align: center;
  }
`;

type EventsByDay = {
  date: Date;
  events: EventBean[];
};

export const CalendarGrid = () => {
  const [cursor, setCursor] = useState(new Date());

  const daysInMonth = getDaysInMonth(cursor);
  const firstDayOfMonth = startOfMonth(cursor);
  const firstDayOfMonthDay = getDay(firstDayOfMonth);
  const lastDayOfMonth = endOfMonth(cursor);
  const daysOfMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const lastDayOfPreviousMonth = sub(firstDayOfMonth, { days: 1 });
  const firstDayOfNextMonth = add(lastDayOfMonth, { days: 1 });

  const { eventsOfRange, error, isLoading } = useGetEventsOfRange({
    after: format(lastDayOfPreviousMonth, "yyyy-MM-dd"),
    before: format(firstDayOfNextMonth, "yyyy-MM-dd"),
  });

  const days: EventsByDay[] = Array.from({ length: 35 }, (_, i) => {
    if (i < firstDayOfMonthDay) {
      return null;
    }
    if (i >= daysInMonth + firstDayOfMonthDay) {
      return null;
    }

    const date = daysOfMonth[i - firstDayOfMonthDay];
    const events = eventsOfRange?.filter((event) =>
      isSameDay(new Date(event.fields.Date), date)
    );
    return { date, events };
  });

  return (
    <Container>
      <Toolbar>
        <button onClick={() => setCursor(sub(cursor, { months: 1 }))}>
          Back
        </button>
        <p>{format(cursor, "MMMM yyyy")}</p>
        <button onClick={() => setCursor(add(cursor, { months: 1 }))}>
          Next
        </button>
      </Toolbar>
      <DayLabels>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </DayLabels>
      <Month>
        {days.map((day) => (
          <Day>
            <DayNumber>
              <DayInner>{day && format(day.date, "d")}</DayInner>
            </DayNumber>
            {day?.events && day.events.length > 0 && (
              <Link href={`/calendar/${day.events[0].id}`}>
                <Image
                  src={day.events[0].fields.act_image[0].url}
                  alt={day.events[0].fields.act_image[0].filename}
                  fill
                />
              </Link>
            )}
          </Day>
        ))}
      </Month>
    </Container>
  );
};
