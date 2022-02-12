/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import "../styles/globals.css";
import { NextIntlProvider } from "next-intl";
import React, { memo, useRef } from "react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
const ROUTES_TO_RETAIN = ["/", "/en-US"];

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const retainedComponents: any = useRef({});

  const isRetainableRoute: any = ROUTES_TO_RETAIN.includes(router.asPath);

  // Add Component to retainedComponents if we haven't got it already
  if (isRetainableRoute && !retainedComponents.current[router.asPath]) {
    const MemoComponent = memo(Component);
    retainedComponents.current[router.asPath] = {
      component: <MemoComponent {...pageProps} />,
      scrollPos: 0,
    };
  }
  return (
    <>
      <div style={{ display: isRetainableRoute ? "block" : "none" }}>
        {Object.entries(retainedComponents.current).map(([path, c]: any) => (
          <div
            key={path}
            style={{ display: router.asPath === path ? "block" : "none" }}
          >
            <SessionProvider session={session}>
              <NextNProgress color="#ffc700" options={{ showSpinner: false }} />

              <NextIntlProvider messages={pageProps.messages}>
                {c.component}
              </NextIntlProvider>
            </SessionProvider>
          </div>
        ))}
      </div>
      <SessionProvider session={session}>
        <NextNProgress color="#ffc700" options={{ showSpinner: false }} />
        <NextIntlProvider messages={pageProps.messages}>
          {!isRetainableRoute && <Component {...pageProps} />}
        </NextIntlProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
