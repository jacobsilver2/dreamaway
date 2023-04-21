import { ReactElement } from "react";
import { Calendar as CalendarComponent } from "../../components/calendar";
import { CalendarLayout } from "../../components/common/layouts";
import { NextPageWithLayout } from "../_app";

const Music: NextPageWithLayout = () => <CalendarComponent />;

Music.getLayout = (page: ReactElement) => (
  <CalendarLayout>{page}</CalendarLayout>
);

export default Music;
