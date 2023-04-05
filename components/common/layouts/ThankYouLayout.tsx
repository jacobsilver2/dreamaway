import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import GreenGlassImage from "../../../public/home/Green_Glass.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const ThankYouLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={GreenGlassImage}
        altText="Green Glass Image"
        title="Thank You"
      />
      <Container>{children}</Container>
    </Layout>
  );
};
