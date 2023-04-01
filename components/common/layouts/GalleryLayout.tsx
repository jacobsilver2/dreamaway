import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import HouseFront from "../../../public/home/house_front.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const GalleryLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={HouseFront}
        altText="House Front"
        title="Gallery"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};