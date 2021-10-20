interface ItemGalleryProps {
  src: string | undefined;
  alt: string | undefined;
  description: string | undefined;
  name: string | undefined;
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({
  src,
  alt,
  description,
  name,
}) => {
  return (
    <section>
      <figure>
        <p>
          <img src={src} alt={alt} />
        </p>
        <figcaption>{name}</figcaption>
      </figure>
      <p>{description}</p>
    </section>
  );
};
