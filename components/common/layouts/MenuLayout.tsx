import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import DreamyDiscoImage from "../../../public/menu/dreamy_disco_compressed.jpeg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const MenuLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={DreamyDiscoImage}
        altText="Dreamy Disco Image"
        title="Menu"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
