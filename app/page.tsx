import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav} style={{display:"flex",gap:10}}>
        <Link href="/landing/page1" className={styles.link}>
          Page 1
        </Link>
      
        <Link href="/landing/page1" className={styles.link}>
          Page 2
        </Link>
      </nav>

      <section className={styles.intro}>
        <h1>Welcome to the Landing Pages Demo</h1>
        <p>
          This site is powered by <strong>Contentful</strong> and{" "}
          <strong>Next.js</strong>. Click the links above to see example
          landing pages with content fetched dynamically.
        </p>
      </section>
    </div>
  );
}
