import React from "react";
import { Provider } from "../context/Provider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <HeroUIProvider>
        <Provider>
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      </HeroUIProvider>
    </>
  );
}