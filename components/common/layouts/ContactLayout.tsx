import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import BlackHatImage from "../../../public/home/Black_Hat.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const ContactLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={BlackHatImage}
        altText="House Front"
        title="Contact"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
