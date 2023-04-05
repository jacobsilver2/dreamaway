import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import DylanPiano from "../../../public/music/Dylan_Piano.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const BookingLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={DylanPiano}
        altText="Accordion Image"
        title="Booking"
      />
      <Container>{children}</Container>
    </Layout>
  );
};
