import styles from "./HomeLogo.module.css";

function HomeLogo() {
  return (
    <div>
      <img className={styles.logo} src="/images/havannah-logo.png" alt="" />
    </div>
  );
}

export default HomeLogo;
