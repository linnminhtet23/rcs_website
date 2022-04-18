// import Image from "next/image";
import Button from "./Button";
import styles from "./CheckServices.module.css";
// import useTranslation from "next-translate/useTranslation";

function CheckServices() {
//   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.image}>
          <img
            src="/images/home/check-services.png"
            alt="Check Services"
            width={766}
            height={496}
          />
        </div>
{/* 
        <h2>
          {t("home:service_title_1")}
          <br /> {t("home:service_title_2")}
        </h2> */}

        {/* <p className="paragraphfont">{t("home:service_subtitle")}</p> */}
        <Button path="/services" label="Check Services" />
      </div>
    </div>
  );
}

export default CheckServices;
