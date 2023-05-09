import { wrapper } from "redux/app/store";
import "../styles/_bootstrap.scss";
import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "components/Layout";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/_error") return <Component {...pageProps} />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default wrapper.withRedux(App);
