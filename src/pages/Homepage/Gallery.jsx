import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section>
      <div className={styles.galleryContainer}>
        <img
          className={styles.gImage}
          src="/images/gallery-image-1.png"
          alt=""
        />
        <img
          className={styles.gImage}
          src="/images/gallery-image-2.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Gallery;
