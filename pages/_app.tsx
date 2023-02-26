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

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    white: "#fff",
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
