import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import DylanPiano from "../../../public/music/dylan_piano_compressed.jpeg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const BookingLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={DylanPiano}
        altText="Dylan Piano Compressed"
        title="Booking"
      />
      <Container>{children}</Container>
    </Layout>
  );
};
