import { Faq as BarComponent } from "../components/faq";
import { FaqLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";

const Bar: NextPageWithLayout = () => {
  return <BarComponent />;
};

Bar.getLayout = (page) => {
  return <FaqLayout>{page}</FaqLayout>;
};

export default Bar;
