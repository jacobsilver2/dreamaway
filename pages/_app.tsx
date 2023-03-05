import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Layout } from "../components/common/Layout";
import { GlobalStyle } from "../components/common/styles/";
import "yet-another-react-lightbox/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const theme: DefaultTheme = {
  colors: {
    black: "#111",
    white: "#FFFCF9",
    blue: "#26547C",
    red: "#EF476F",
    yellow: "#FFD166",
    green: "#06D6A0",
    brown: "#1b1412",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
