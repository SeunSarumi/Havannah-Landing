import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <figure className={styles.galleryContainer}>
      <img className={styles.gImage} src="/images/gallery-image-1.png" alt="" />
      <img className={styles.gImage} src="/images/gallery-image-2.png" alt="" />
    </figure>
  );
}

export default Gallery;
