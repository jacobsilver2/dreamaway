import { ReactElement, ReactNode, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "../components/common/styles/";
import "yet-another-react-lightbox/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NextPage } from "next";

const theme: DefaultTheme = {
  sizes: {
    maxWidth: "1200px",
    mobileBreakpoint: "768px",
  },
  colors: {
    black: "#111",
    white: "#FFFCF9",
    blue: "#26547C",
    red: "#EF476F",
    yellow: "#FFD166",
    green: "#06D6A0",
    brown: "#1b1412",
    grey: "#bcc5ce",
    lightGrey: "#f7f7f7",
    darkGrey: "#333",
  },
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Hydrate state={pageProps.dehydratedState}>
            <ParallaxProvider>
              {getLayout(<Component {...pageProps} />)}
            </ParallaxProvider>
          </Hydrate>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
