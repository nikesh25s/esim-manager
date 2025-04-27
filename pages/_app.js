

import Layout from '../components/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  // Skip layout for index page
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout showBack={Component.showBack}>
      <Component {...pageProps} />
    </Layout>
  );
}