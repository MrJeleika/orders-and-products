import { wrapper } from "redux/app/store";
import "../styles/_bootstrap.scss";
import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "components/Layout";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import "../utils/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import { Suspense, useEffect } from "react";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache, pageProps } = props;
  const router = useRouter();

  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n.language]);

  if (router.pathname === "/_error") return <Component {...pageProps} />;
  return (
    <Provider store={store}>
      <Suspense fallback="loading...">
        <CacheProvider value={emotionCache}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CacheProvider>
      </Suspense>
    </Provider>
  );
}
export default wrapper.withRedux(App);
