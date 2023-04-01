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
import { CalendarGridDay } from "./CalendarGridDay";
import { DayLabels } from "./DayLabels";
import { Toolbar } from "./Toolbar";
import Link from "next/link";

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    width: 100%;
  }
`;

const Month = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.5rem;
`;

export type EventsByDay = {
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
      <Toolbar cursor={cursor} setCursor={setCursor} />
      <DayLabels />
      <Month>
        {days.map((day, i) => {
          const hasEvents = day?.events?.length > 0 && !isLoading;
          if (hasEvents) {
            return (
              <Link key={i} href={`/music/${day.events[0].id}`}>
                <CalendarGridDay
                  loading={isLoading}
                  cursor={cursor}
                  day={day}
                  key={i}
                />
              </Link>
            );
          }
          return (
            <CalendarGridDay
              loading={isLoading}
              cursor={cursor}
              day={day}
              key={i}
            />
          );
        })}
      </Month>
    </Container>
  );
};
