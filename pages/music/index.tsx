import { ReactElement } from "react";
import { Calendar as CalendarComponent } from "../../components/music";
import { MusicLayout } from "../../components/common/layouts";
import { NextPageWithLayout } from "../_app";

const Music: NextPageWithLayout = () => <CalendarComponent />;

Music.getLayout = (page: ReactElement) => {
  return <MusicLayout>{page}</MusicLayout>;
};

export default Music;
