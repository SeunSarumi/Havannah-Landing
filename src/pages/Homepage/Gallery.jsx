import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <img className={styles.gImage} src="/images/gallery-image-1.png" alt="" />
      <img className={styles.gImage} src="/images/gallery-image-2.png" alt="" />
      <img className={styles.gImage} src="/images/gallery-image-3.png" alt="" />
    </div>
  );
}

export default Gallery;
