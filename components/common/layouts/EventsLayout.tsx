import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import CandelabraImage from "../../../public/events/Candelabra.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const EventsLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={CandelabraImage}
        altText="House Front"
        title="Events"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
