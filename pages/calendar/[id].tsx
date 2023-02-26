import { Event } from "../../components/Calendar/Event";

const CalendarActPage = ({ id }) => {
  return <Event id={id} />;
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: {
      id,
    },
  };
}

export default CalendarActPage;
