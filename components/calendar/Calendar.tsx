import styled from "styled-components";
import { CalendarGrid } from "./CalendarGrid";
import { NextEvent } from "./NextEvent";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const Calendar = () => (
  <Container>
    <NextEvent />
    <CalendarGrid />
  </Container>
);
