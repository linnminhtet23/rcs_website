// import Image from "next/image";
import styles from "./Speech.module.css";
// import useTranslation from "next-translate/useTranslation";

function Speech() {
  // const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* <h1>{t("about:speech-title")}</h1> */}
      <div className={styles.card}>
        <img
          src="/images/about/chit-hsu-wai.jpeg"
          alt="CEO Profile"
          width={225}
          height={225}
          className={styles.image}
        />

        <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
          {/* <p>{t("about:speech-description-1")}</p>
          <p>{t("about:speech-description-2")}</p>
          <p>{t("about:speech-description-3")}</p>
          <p>{t("about:speech-description-4")}</p>
          <p>{t("about:speech-description-5")}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Speech;