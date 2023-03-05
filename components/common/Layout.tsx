import Head from "next/head";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Container } from "./styles";

const Grid = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100vh;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
    justify-self: center;
    margin: 1rem;
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
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </Grid>
  </>
);
