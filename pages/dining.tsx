import { DiningLayout } from "../components/common/layouts";
import { Dining as DiningComponent } from "../components/dining";
import { NextPageWithLayout } from "./_app";

const Dining: NextPageWithLayout = () => {
  return <DiningComponent />;
};

Dining.getLayout = (page) => {
  return <DiningLayout>{page}</DiningLayout>;
};

export default Dining;
