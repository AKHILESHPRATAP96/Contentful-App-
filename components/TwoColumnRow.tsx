
import styles from "@/styles/TwoColumnRow.module.css";
import Image from "next/image";

type TwoColumnRowProps = {
  heading: string;
  subtitle: string;
  cta: string;
  image: {
    url: string;
    description: string;
  };
};

export default function TwoColumnRow({
  heading,
  subtitle,
  cta,
  image,
}: TwoColumnRowProps) {
  if (!image) return null;

  return (
    <section className={styles.row}>
      <div>
        <h3>{heading}</h3>
        <p>{subtitle}</p>
        <button>{cta}</button>
      </div>
      <Image
        src={image.url}
        alt={image.description}
        width={400}
        height={300}
      />
    </section>
  );
}
