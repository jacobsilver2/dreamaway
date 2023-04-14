import { EventBean, LayoutProps } from "../../../utils";
import { Layout } from "./Layout";
import { ParallaxHeader } from "../ParallaxHeader";
import { Container } from "../styles";

type CalendarEventLayoutProps = LayoutProps & {
  event: EventBean;
};

export const CalendarEventLayout = ({
  children,
  event,
}: CalendarEventLayoutProps) => {
  const image = event.fields?.act_image
    ? event.fields?.act_image[0].url
    : "https://source.unsplash.com/random/?music";

  const link = event.fields?.act_url ? event.fields?.act_url[0] : "";

  return (
    <Layout>
      <ParallaxHeader
        image={image}
        altText={event?.fields?.Name}
        title={event?.fields?.Name}
        date={event?.fields?.Date}
        time={event?.fields?.Time_Formatted}
        link={link}
        fill
      />
      <Container>{children}</Container>
    </Layout>
  );
};
