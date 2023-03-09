import { useGetTodayEvents } from "../../utils/query/useGetEvents";
import { Title } from "../common/styles";
import { CalendarGrid } from "./CalendarGrid";

export const Calendar = () => {
  const { todayEvents, isLoading, error } = useGetTodayEvents();

  return (
    <>
      {todayEvents?.length > 0 && (
        <>
          <Title>Tonight</Title>
          {todayEvents.map((event) => (
            <p>
              {event.fields.Name} - {event.fields.Time_Formatted}
            </p>
          ))}
        </>
      )}
      <CalendarGrid />
    </>
  );
};
