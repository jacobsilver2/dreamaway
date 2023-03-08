import { DirectionsLayout } from "../components/common/layouts";
import { Directions as DirectionsComponent } from "../components/directions";
import { NextPageWithLayout } from "./_app";

const Directions: NextPageWithLayout = () => {
  return <DirectionsComponent />;
};

Directions.getLayout = (page) => {
  return <DirectionsLayout>{page}</DirectionsLayout>;
};

export default Directions;
