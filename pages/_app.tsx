import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { TableProvider } from "../context/userContext";

interface Props {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const progress = new ProgressBar({
  size: 4,
  color: "#D82148",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <TableProvider>
      <Component {...pageProps} />
    </TableProvider>
  );
}

export default MyApp;
