import styled from "styled-components";
import { sub, format, add } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StyledToolbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Toolbar = ({
  cursor,
  setCursor,
}: {
  cursor: Date;
  setCursor: (date: Date) => void;
}) => {
  return (
    <StyledToolbarContainer>
      <ActionButton onClick={() => setCursor(sub(cursor, { months: 1 }))}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ActionButton>
      <h2>{format(cursor, "MMMM yyyy")}</h2>
      <ActionButton onClick={() => setCursor(add(cursor, { months: 1 }))}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ActionButton>
    </StyledToolbarContainer>
  );
};
