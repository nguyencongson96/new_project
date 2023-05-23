import React, { useEffect } from "react";
import styles from "@/styles/test.module.css";
import testAPI from "@/api/user/sampleAPI";
import testLayout from "@/layouts/test";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const { isLoading } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    setTimeout(() => dispatch({ type: "LOADING", payload: false }), 5000);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div className={styles.test}>Loading: {isLoading.toString()}</div>;
    </>
  );
};

export default Test;
Test.Layout = testLayout;
