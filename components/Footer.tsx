import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="full-width">
      <footer className={`${styles.width} ${styles.footer}`}>
        <p>This is a footer</p>
      </footer>
    </div>
  );
};

export default Footer;
