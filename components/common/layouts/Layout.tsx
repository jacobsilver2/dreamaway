import Head from "next/head";
import styled from "styled-components";
import { LayoutProps } from "../../../utils/types";
import { Footer } from "../Footer";

const Grid = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  main {
    width: 100%;
    height: 100%;
    flex: auto;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  footer {
    grid-area: footer;
  }
`;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Dreamaway</title>
      <meta name="description" content="Welcome to the Dreamaway Lodge" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Grid>
      <main>{children}</main>
      <Footer />
    </Grid>
  </>
);
