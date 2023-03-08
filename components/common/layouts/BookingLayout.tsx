import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import HouseFront from "../../../public/home/house_front.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const BookingLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={HouseFront}
        altText="House Front"
        title="Booking"
      />
      <Container>{children}</Container>
    </Layout>
  );
};
