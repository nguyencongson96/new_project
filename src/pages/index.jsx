import Head from "next/head";
import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample for you</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.background}></div>
        <h1>
          Welcome,
          <br /> Click to test
        </h1>
        <Link className={styles.button} href={"/test"}>
          Start
        </Link>
      </main>
    </>
  );
}
