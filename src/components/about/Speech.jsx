import styles from "./Speech.module.css";
import data from "../../locales/en-US/about.json";
function Speech() {
  // const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>{data["speech-title"]}</h1>
      <div className={styles.card}>
        <img
          src="./images/about/CEO.png"
          alt="CEO Profile"
          className={styles.image}
        />

        <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
          <p>{data["speech-description-1"]}</p>
          <p>{data["speech-description-2"]}</p>
          <p>{data["speech-description-3"]}</p>
          <p>{data["speech-description-4"]}</p>
          <p>{data["speech-description-5"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Speech;