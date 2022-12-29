import "../styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/components/Top";
import Footer from "../src/components/Footer";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${styles.home}`}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

/**
 * 페이지 전환시 레이아웃 유지
 * 추가적인 데이터를 페이지로 전달
 */
