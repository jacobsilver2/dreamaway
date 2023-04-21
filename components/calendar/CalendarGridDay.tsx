import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import {
  useHover,
  useFloating,
  useInteractions,
  offset,
  safePolygon,
  shift,
  flip,
} from "@floating-ui/react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { format, isToday } from "date-fns";
import { EventsByDay } from "./CalendarGrid";
import { getRandomImage } from "../../utils";

const Day = styled.div<{ hasEvents?: boolean; isToday?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  aspect-ratio: 1;
  transition: all 0.2s ease-in-out;

  @media (max-width: ${({ theme }) => theme.sizes.mobileBreakpoint}) {
    ${({ hasEvents }) =>
      hasEvents &&
      css`
        background: ${({ theme }) => theme.colors.darkGrey};
      `}
  }
`;

const StyledImage = styled(Image)`
  @media (max-width: ${({ theme }) => theme.sizes.mobileBreakpoint}) {
    display: none;
  }
`;

const DayNumber = styled.div<{ isToday: boolean; hasEvents: boolean }>`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  font-size: 0.8rem;
  color: #333;
  z-index: 2;
  border-radius: 50%;
  ${({ isToday }) =>
    isToday &&
    css`
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    `}

  @media (max-width: ${({ theme }) => theme.sizes.mobileBreakpoint}) {
    position: relative;
    top: unset;
    right: unset;
    width: 100%;
    height: 100%;
    background: unset;
    color: ${({ theme, hasEvents }) =>
      hasEvents ? theme.colors.white : theme.colors.black};
  }
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

const StyledFloating = styled.div`
  position: relative;
  z-index: 5;
  width: 200px;
  height: 200px;
  overflow: scroll;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 1rem;
  border-radius: 2px;
  a {
    &:hover {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

const StyledFloatingInner = styled.div`
  width: 100%;
  height: 100%;
`;

type CalendarGridDayProps = {
  day?: EventsByDay;
  cursor: Date;
  loading: boolean;
};

export const CalendarGridDay = ({
  day,
  cursor,
  loading,
}: CalendarGridDayProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [shift(), flip(), offset(8)],
  });
  const hover = useHover(context, { handleClose: safePolygon() });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  useEffect(() => {
    setIsOpen(false);
  }, [cursor]);

  const dayIsToday = isToday(day?.date);
  const hasEvents = !loading && day?.events?.length > 0;

  const getFeaturedEvent = useCallback(() => {
    if (day?.events?.length === 1) {
      return day?.events[0];
    }

    const hasFeatured = day?.events?.find((event) => event.fields.featured);
    return hasFeatured || day?.events[0];
  }, [day]);

  const renderEvents = useMemo(() => {
    if (hasEvents) {
      return (
        <StyledImage
          placeholder="blur"
          blurDataURL="
          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs+A8AAhUBiUo2eoUAAAAASUVORK5CYII=
          "
          src={
            getFeaturedEvent()?.fields.act_image
              ? getFeaturedEvent()?.fields.act_image[0].url
              : "https://source.unsplash.com/random/?music"
          }
          alt={
            getFeaturedEvent()?.fields.act_image
              ? getFeaturedEvent()?.fields.act_image[0].filename
              : "Random Image"
          }
          fill
        />
      );
    }
    return null;
  }, [hasEvents, getFeaturedEvent]);

  return (
    <>
      <Day
        ref={refs.setReference}
        {...getReferenceProps()}
        hasEvents={hasEvents}
        isToday={dayIsToday}
      >
        <DayNumber hasEvents={hasEvents} isToday={dayIsToday}>
          <DayInner>{day && format(day.date, "d")}</DayInner>
        </DayNumber>
        {renderEvents}
      </Day>
      {hasEvents && isOpen && (
        <>
          <StyledFloating
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            ref={refs.setFloating}
            {...getFloatingProps()}
          >
            <StyledFloatingInner>
              {day?.events?.map((event) => (
                <p key={event.id}>
                  <Link href={`/calendar/${event.id}`}>
                    {event.fields.Time_Formatted} - {event.fields.Name}
                  </Link>
                </p>
              ))}
            </StyledFloatingInner>
          </StyledFloating>
        </>
      )}
    </>
  );
};
