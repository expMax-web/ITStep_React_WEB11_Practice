import { Link } from "react-router-dom";
import styles from "./ItemGallery.module.scss";

interface ItemGalleryProps {
  src: string | undefined;
  alt: string | undefined;
  description: string | undefined;
  name: string | undefined;
  id?: string;
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({
  src,
  alt,
  description,
  name,
  id,
}) => {
  return (
    <section id={id} className={styles.ItemGalleryContainer}>
      <figure className={styles.ItemContainer}>
        <p>
          <img src={src} alt={alt} className={styles.Img} />
        </p>
        <figcaption className={styles.ItemFigcaption}>{name}</figcaption>
      </figure>
      <p className={styles.Description}>{description}</p>
    </section>
  );
};
