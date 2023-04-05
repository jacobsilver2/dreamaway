import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import RedPaintingLayout from "../../../public/home/Red_Painting_Details.jpg";
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
