import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
