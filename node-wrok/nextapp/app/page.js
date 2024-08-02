import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link href="/sub">/app/sub/page.js</Link>
          {/* <a href="/sub">/app/sub/page.js</a> */}
        </li>
      </ul>
    </div>
  );
}
