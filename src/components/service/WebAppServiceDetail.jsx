import styles from "./WebAppServiceDetail.module.css";
import CheckoutBtn from "../../shared-components/CheckoutBtn";
import data from '../../locales/en-US/webAppServiceDetail.json'


function WebAppServiceDetail() {

  return (
    <div className={styles.container}>
      <h1>Web Application</h1>
      <div className={styles.detailcard}>
        <div className={styles.textcontainer}>
          <p>
            <b>{data["web-app-hightlight-1"]}</b>
            {data["web-app-description-1"]}
          </p>
          <p>
            <b>{data["web-app-hightlight-2"]}</b>
            {data["web-app-description-2"]}
          </p>
          <p>
            <b>{data["web-app-hightlight-3"]}</b>
            {data["web-app-description-3"]}
          </p>

          <CheckoutBtn path="Web App Service" />
        </div>
        <img
          src="/images/services/web-application/web-application-1.jpg"
          alt="Web Application"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default WebAppServiceDetail;
