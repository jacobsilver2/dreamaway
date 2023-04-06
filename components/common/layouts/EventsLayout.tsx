import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import CandelabraImage from "../../../public/events/candelabra_compressed.jpeg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const EventsLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={CandelabraImage}
        altText="Candelabra"
        title="Events"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
