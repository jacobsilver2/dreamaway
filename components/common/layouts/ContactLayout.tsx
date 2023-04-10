import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import RoosterImage from "../../../public/contact/rooster_compressed_1600.jpeg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const ContactLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={RoosterImage}
        altText="Rooster"
        title="The Dream Away Lodge"
      />
      <Container>{children}</Container>
    </Layout>
  );
};
