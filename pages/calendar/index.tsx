import { ReactElement } from "react";
import { Calendar as CalendarComponent } from "../../components/Calendar";
import { BarLayout } from "../../components/common/layouts/";
import { NextPageWithLayout } from "../_app";

const Calendar: NextPageWithLayout = () => <CalendarComponent />;

Calendar.getLayout = (page: ReactElement) => {
  return <BarLayout>{page}</BarLayout>;
};

export default Calendar;
