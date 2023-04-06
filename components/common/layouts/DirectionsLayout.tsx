import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import RedPaintingLayout from "../../../public/home/red_painting_details_compressed.jpeg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const DirectionsLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={RedPaintingLayout}
        altText="Red Painting Layout"
        title="Directions"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
