import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import PianoFrameImage from "../../../public/music/Dylan_Piano.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const MusicLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={PianoFrameImage}
        altText="Dylan Piano Frame"
        title="Live Music"
        fill
      />
      <Container>{children}</Container>
    </Layout>
  );
};
