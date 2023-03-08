import { Bar as BarComponent } from "../components/bar";
import { BarLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";

const Bar: NextPageWithLayout = () => {
  return <BarComponent />;
};

Bar.getLayout = (page) => {
  return <BarLayout>{page}</BarLayout>;
};

export default Bar;
