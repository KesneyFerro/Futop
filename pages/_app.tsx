/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import "../styles/globals.css";
import { NextIntlProvider } from "next-intl";
import React, { memo, useEffect, useRef } from "react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
const ROUTES_TO_RETAIN = ["/"];

function MyApp({ Component, pageProps }: AppProps) {
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

  // Save the scroll position of current page before leaving
  const handleRouteChangeStart = (url: any) => {
    if (isRetainableRoute) {
      retainedComponents.current[router.asPath].scrollPos = window.scrollY;
    }
  };

  // Save scroll position - requires an up-to-date router.asPath
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.asPath]);

  // Scroll to the saved position when we load a retained component
  useEffect(() => {
    if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.asPath].scrollPos);
    }
  }, [Component, pageProps]);

  return (
    <>
      <div style={{ display: isRetainableRoute ? "block" : "none" }}>
        {Object.entries(retainedComponents.current).map(([path, c]: any) => (
          <div
            key={path}
            style={{ display: router.asPath === path ? "block" : "none" }}
          >
            <NextNProgress color="#ffc700" />
            <NextIntlProvider messages={pageProps.messages}>
              {c.component}
            </NextIntlProvider>
          </div>
        ))}
      </div>
      <NextNProgress color="#ffc700" />
      <NextIntlProvider messages={pageProps.messages}>
        {!isRetainableRoute && <Component {...pageProps} />}
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
