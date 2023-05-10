import { wrapper } from "redux/app/store";
import "../styles/_bootstrap.scss";
import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "components/Layout";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache, pageProps } = props;
  const router = useRouter();

  if (router.pathname === "/_error") return <Component {...pageProps} />;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default wrapper.withRedux(App);
