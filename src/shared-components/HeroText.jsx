import styles from "./HeroText.module.css";

function HeroText({title, url}) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${url})` }}>
      <div className={styles.textcontainer}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default HeroText;
