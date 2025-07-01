import styles from "@/styles/TwoColumnRow.module.css";
import Image from "next/image";

export default function TwoColumnRow({ heading, subtitle, cta, image }: any) {
  return (
    <section className={styles.row}>
      <div>
        <h3>{heading}</h3>
        <p>{subtitle}</p>
        <button>{cta}</button>
      </div>
      <Image src={image.url} alt={image.description} width={400} height={300} />
    </section>
  );
}
