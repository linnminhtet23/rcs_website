import styles from "./AboutOurCompany.module.css";
// import useTranslation from "next-translate/useTranslation";

function AboutOurCompany() {
//   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>About Our Company</h1>
      <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
        {/* <p>{t("about:description-1")}</p>
        <p>{t("about:description-2")}</p>
        <p>{t("about:description-3")}</p> */}
      </div>
    </div>
  );
}

export default AboutOurCompany;
