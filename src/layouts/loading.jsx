import React from "react";
import styles from "@/styles/loading.module.css";
import { useSelector } from "react-redux";

const LoadingLayout = () => {
  const isLoading = useSelector((state) => state.general.isLoading);
  const classToggle = isLoading ? "on" : "off";
  return (
    <div className={`${styles.loading} ${styles[classToggle]}`}>
      <ul className={styles.dot_list}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={styles.background}></div>
    </div>
  );
};

export default LoadingLayout;
