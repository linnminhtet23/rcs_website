import styles from "./OurServices.module.css";

// import useTranslation from "next-translate/useTranslation";

function OurServices() {
//   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <div className={styles.cardcontainer}>
        {/* Website Service */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/website/website-service.jpg"
              alt="Website Service"
            //   layout="fill"
            //   objectFit="cover"
              className={styles.image}
            />
          </div>
          {/* <h4>{t("services:website")}</h4> */}
          {/* <p>{t("services:website-description")}</p> */}
          {/* <ul>
            <li>{t("services:website-description-list-1")}</li>
            <li>{t("services:website-description-list-2")}</li>
            <li>{t("services:website-description-list-3")}</li>
            <li>{t("services:website-description-list-4")}</li>
          </ul> */}
          {/* <Link href="/services/website"> */}
            <a className={styles.btn}>Read More</a>
          {/* </Link> */}
        </div>

        {/* Web App */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/web-application/web-application-1.jpg"
              alt="Website Application"
            //   layout="fill"
            //   objectFit="cover"
              className={styles.image}
            />
          </div>
          {/* <h4>{t("services:webapp")}</h4>
          <p>{t("services:webapp-description")}</p>
          <ul>
            <li>{t("services:webapp-description-list-1")}</li>
            <li>{t("services:webapp-description-list-2")}</li>
            <li>{t("services:webapp-description-list-3")}</li>
          </ul> */}
          {/* <Link href="/services/web-application"> */}
            <a className={styles.btn}>Read More</a>
          {/* </Link> */}
        </div>

        {/* Android Application */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/android-application/android-application.jpg"
              alt="Website Application"
            //   layout="fill"
            //   objectFit="cover"
              className={styles.image}
            />
          </div>
          {/* <h4>{t("services:android")}</h4> */}
          <ul>
            {/* <li>{t("services:android-description-list-1")}</li>
            <li>{t("services:android-description-list-2")}</li>
            <li>{t("services:android-description-list-3")}</li> */}
          </ul>
          {/* <Link href="/services/android-application"> */}
            <a className={styles.btn}>Read More</a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
