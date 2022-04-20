import styles from "./AndroidAppServiceDetail.module.css";
import CheckoutBtn from "../../shared-components/CheckoutBtn";
import data from '../../locales/en-US/androidAppServiceDetail.json'


function AndroidAppServiceDetail() {

  return (
    <div className={styles.container}>
      <h1>Android Application</h1>
      <div className={styles.detailcard}>
        <div className={styles.textcontainer}>
          <p>
            <b>{data["android-app-hightlight-1"]}</b>
            {data["android-app-description-1"]}
          </p>
          <p>{data["android-app-description-2"]}</p>
          <p>{data["android-app-description-3"]}</p>

          <CheckoutBtn path="Android App Service" />
        </div>
        <img
          src="/images/services/android-application/android-application.jpg"
          alt="Android Application"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default AndroidAppServiceDetail;
