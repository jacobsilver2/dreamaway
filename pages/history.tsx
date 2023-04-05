import { History as HistoryComponent } from "../components/history";
import { HistoryLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";

const History: NextPageWithLayout = () => {
  return <HistoryComponent />;
};

History.getLayout = (page) => {
  return <HistoryLayout>{page}</HistoryLayout>;
};

export default History;
