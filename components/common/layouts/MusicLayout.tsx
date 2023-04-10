import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import PianoFrameImage from "../../../public/music/dylan_piano_compressed_1600.jpeg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const MusicLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={PianoFrameImage}
        altText="Dylan Piano Frame"
        title="Live Music"
        fill={true}
      />
      <Container>{children}</Container>
    </Layout>
  );
};
