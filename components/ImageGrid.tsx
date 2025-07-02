import styles from "@/styles/ImageGrid.module.css";
import Image from "next/image";

type ImageGridProps = {
  imagesCollection: {
    items: {
      url: string;
      description: string;
    }[];
  };
};

export default function ImageGrid({ imagesCollection }: ImageGridProps) {
  if (!imagesCollection || !imagesCollection.items || imagesCollection.items.length === 0) {
    return null;
  }

  return (
    <section className={styles.grid}>
      {imagesCollection.items.map((img, idx) => (
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
