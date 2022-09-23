import Head from "next/head";
import Link from "next/link";
import { Message } from "../components/message";

export default function Home() {
  return (
    <div>
      <Head>
        <title>static site</title>
      </Head>
      <h1>This is Static site!</h1>
      <Message name="tatan" />
      <Link href="./about">about</Link>
    </div>
  );
}
