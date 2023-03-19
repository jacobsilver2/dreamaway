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
  return (
    <Layout>
      <ParallaxHeader
        image={event.fields?.act_image[0].url}
        altText={event?.fields?.Name}
        title={event?.fields?.Name}
        date={event?.fields?.Date}
        time={event?.fields?.Time_Formatted}
        fill
      />
      <Container>{children}</Container>
    </Layout>
  );
};
