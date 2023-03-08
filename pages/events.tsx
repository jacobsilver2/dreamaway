import { EventsLayout } from "../components/common/layouts";
import { Events as EventsComponent } from "../components/events/";
import { NextPageWithLayout } from "./_app";

const Events: NextPageWithLayout = () => {
  return <EventsComponent />;
};

Events.getLayout = (page) => {
  return <EventsLayout>{page}</EventsLayout>;
};

export default Events;
