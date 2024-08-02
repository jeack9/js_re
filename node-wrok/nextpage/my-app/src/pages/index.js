import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>NEXT.JS</h1>
      <ul>
        <li>
          <a href="/sub">/pages/sub/index.js</a>
        </li>
        <li>
          <a href="/sub/about">about</a>
        </li>
        <li>
          <a href="/sub/product">product</a>
        </li>
        <li>
          <a href="/sub/fetch">Fetch</a>
        </li>
      </ul>
    </div>
  );
}
