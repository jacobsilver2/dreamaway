import Head from "next/head";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Grid = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  header {
    grid-area: header;
  }
  main {
    width: 100%;
    height: 100%;
    flex: auto;
    justify-self: center;
    align-self: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  footer {
    grid-area: footer;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Dreamaway</title>
      <meta name="description" content="Welcome to the Dreamaway Lodge" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Grid>
      <Header />
      <main>{children}</main>
      <Footer />
    </Grid>
  </>
);
