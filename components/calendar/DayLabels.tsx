import styled from "styled-components";

const StyledDayLabels = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  p {
    text-align: center;
  }
`;

export const DayLabels = () => (
  <StyledDayLabels>
    <p>Sun</p>
    <p>Mon</p>
    <p>Tue</p>
    <p>Wed</p>
    <p>Thu</p>
    <p>Fri</p>
    <p>Sat</p>
  </StyledDayLabels>
);
