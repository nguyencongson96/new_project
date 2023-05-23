import React from "react";
import styles from "@/styles/test.module.css";

const testLayout = (props) => {
  return (
    <div className={styles.test_layout}>
      <div>Test Layout</div>
      {props.children}
    </div>
  );
};

export default testLayout;
