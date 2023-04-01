import { AboutLayout } from "../components/common/layouts/AboutLayout";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return <div>About</div>;
};

About.getLayout = (page) => {
  return <AboutLayout>{page}</AboutLayout>;
};

export default About;
