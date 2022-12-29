import Image from "next/image";
import React from "react";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import GNB from "./GNB";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div>
      <div className={styles.titlebar}>
        <div className={`${styles.titlelogo} ${styles.logo}`}>
          <Image
            src="/images/github-mark/github-mark.png"
            alt="logo"
            width="80"
            height="80"
          />
        </div>
        <Header as="h1">HEESEOK</Header>
      </div>
      <GNB />
    </div>
  );
};

export default Top;

/**
 * GNB : Global Navigation Bar
 */
