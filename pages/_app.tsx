import { wrapper } from "redux/app/store";
import "../styles/_bootstrap.scss";
import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "components/Layout";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import i18n from "../utils/i18n";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache, pageProps } = props;
  const router = useRouter();

  if (router.pathname === "/_error") return <Component {...pageProps} />;
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="loading...">
          <CacheProvider value={emotionCache}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CacheProvider>
        </Suspense>
      </I18nextProvider>
    </Provider>
  );
}
export default wrapper.withRedux(App);
