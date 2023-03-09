import axios from "axios";
import { ReactElement } from "react";
import { Event } from "../../components/Calendar/Event";
import { CalendarEventLayout } from "../../components/common/layouts";
import { EventBean, getAirtableEventUrl } from "../../utils";
import { NextPageWithLayout } from "../_app";

const CalendarActPage: NextPageWithLayout = ({ id }: { id: string }) => (
  <Event id={id} />
);

CalendarActPage.getLayout = (page: ReactElement) => (
  <CalendarEventLayout event={page.props.event}>{page}</CalendarEventLayout>
);

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { data } = await axios.get(getAirtableEventUrl(id));

  return {
    props: {
      id,
      event: data as EventBean,
    },
  };
}

export default CalendarActPage;
