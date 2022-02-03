/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import "../styles/globals.css";
import { NextIntlProvider } from "next-intl";
// import type { AppProps } from "next/app";
import React from "react";
// import { AppProps } from "next/app";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />;
    </NextIntlProvider>
  );
}

export default MyApp;
