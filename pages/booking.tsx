import { BookingForm } from "../components/contact";
import { BookingLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";
const Booking: NextPageWithLayout = () => <BookingForm />;

Booking.getLayout = (page) => {
  return <BookingLayout>{page}</BookingLayout>;
};

export default Booking;
