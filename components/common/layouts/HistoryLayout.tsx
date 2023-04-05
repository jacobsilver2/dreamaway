import { LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import DylanMamaFrameImage from "../../../public/history/Dylan_Mama_Frame.jpg";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

export const HistoryLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <ParallaxHeader
        image={DylanMamaFrameImage}
        altText="Dylan and Mama Frame"
        title="History"
      />
      <Container maxWidth>{children}</Container>
    </Layout>
  );
};
