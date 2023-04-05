import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import SignImage from "../../../public/faq/Sign.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const FaqLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={SignImage}
        altText="Sign Image"
        title="Welcome"
        subText="What to expect when you visit"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
