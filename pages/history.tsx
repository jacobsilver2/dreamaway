import { History as HistoryComponent } from "../components/history";
import { GalleryLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";

const History: NextPageWithLayout = () => {
  return <HistoryComponent />;
};

History.getLayout = (page) => {
  return <GalleryLayout>{page}</GalleryLayout>;
};

export default History;
