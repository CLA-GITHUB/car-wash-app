import "../styles/globals.css";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RouterTransition } from "../components/RouterTransition";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterTransition />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
