import styles from "./OurServices.module.css";
import data from "../../locales/en-US/services.json";
import { Link } from "react-router-dom";


function OurServices() {

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
            
              className={styles.image}
            />
          </div>
          <h4>{data.website}</h4>
          <p>{data["website-description"]}</p>
          <ul>
            <li>{data["website-description-list-1"]}</li>
            <li>{data["website-description-list-2"]}</li>
            <li>{data["website-description-list-3"]}</li>
            <li>{data["website-description-list-4"]}</li>
          </ul>
          <Link to="/services/website">
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>

        {/* Web App */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/web-application/web-application-1.jpg"
              alt="Website Application"
              className={styles.image}
            />
          </div>
          <h4>{data.webapp}</h4>
          <p>{data["webapp-description"]}</p>
          <ul>
            <li>{data["webapp-description-list-1"]}</li>
            <li>{data["webapp-description-list-2"]}</li>
            <li>{data["webapp-description-list-3"]}</li>
          </ul> 
          <Link to="/services/web-application">
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>

        {/* Android Application */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/android-application/android-application.jpg"
              alt="Website Application"

              className={styles.image}
            />
          </div>
          <h4>{data.android}</h4>
          <ul>
            <li>{data["android-description-list-1"]}</li>
            <li>{data["android-description-list-2"]}</li>
            <li>{data["android-description-list-3"]}</li>
          </ul>
          <Link to="/services/android-application">
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
