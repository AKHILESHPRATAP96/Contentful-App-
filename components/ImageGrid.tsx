import styles from "@/styles/ImageGrid.module.css";
import Image from "next/image";

export default function ImageGrid({ imagesCollection }: any) {
  return (
    <section className={styles.grid}>
      {imagesCollection.items.map((img: any, idx: number) => (
        <Image
          key={idx}
          src={img.url}
          alt={img.description}
          width={300}
          height={300}
        />
      ))}
    </section>
  );
}
