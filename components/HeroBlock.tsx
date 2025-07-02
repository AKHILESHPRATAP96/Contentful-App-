
import styles from "@/styles/HeroBlock.module.css";
import Image from "next/image";

type HeroBlockProps = {
  heading: string;
  subtitle: string;
  cta: string;
  backgroundImage: {
    url: string;
    description: string;
  };
};

export default function HeroBlock({
  heading,
  subtitle,
  cta,
  backgroundImage,
}: HeroBlockProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={backgroundImage.url}
        alt={backgroundImage.description}
        fill
        className={styles.bg}
      />
      <div className={styles.content}>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
        <button>{cta}</button>
      </div>
    </section>
  );
}
