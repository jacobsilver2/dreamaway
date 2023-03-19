import { MenuLayout } from "../components/common/layouts";
import { Menu as MenuComponent } from "../components/menu";
import { NextPageWithLayout } from "./_app";

const Menu: NextPageWithLayout = () => {
  return <MenuComponent />;
};

Menu.getLayout = (page) => {
  return <MenuLayout>{page}</MenuLayout>;
};

export default Menu;
