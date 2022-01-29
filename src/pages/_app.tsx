import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../global.css";

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default QogitaApp;
