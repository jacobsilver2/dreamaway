import { ReactElement } from "react";
import { Layout } from "../components/common";
import { Home as HomeComponent } from "../components/home";
import { NextPageWithLayout } from "./_app";

export const Home: NextPageWithLayout = () => <HomeComponent />;

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
