import "bulma/css/bulma.min.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // Remove or comment out debug logs in production
  // console.log(Component);
  return <Component {...pageProps} />;
}
