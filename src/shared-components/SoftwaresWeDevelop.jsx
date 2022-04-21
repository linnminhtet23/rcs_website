
import { Link } from "react-router-dom";
import styles from "./SoftwaresWeDevelop.module.css";

function SoftwaresWeDevelop() {
  return (
    <div className={styles.container}>
      <h1>Softwares We Develop</h1>
      <div className={styles.softwarecontainer}>
        <Link to="/services/website">
            <div className={styles.software}>
              <div className={styles.image}>
                <img
                  src="/images/softwares/website.png"
                  alt="Website"
                  // layout="fill"
                  // objectFit="contain"
                />
              </div>
              <h5>Website</h5>
            </div>
        </Link>
        <Link to="/services/web-application">
            <div className={styles.software}>
              <div className={styles.image}>
                <img
                  src="/images/softwares/web-application.png"
                  alt="Website"
                  // layout="fill"
                  // objectFit="contain"
                />
              </div>
              <h5>Web Application</h5>
            </div>
        </Link>
        <Link to="/services/android-application">
          
            <div className={styles.software}>
              <div className={styles.image}>
                <img
                  src="/images/softwares/android-application.png"
                  alt="Website"
                  // layout="fill"
                  // objectFit="contain"
                />
              </div>
              <h5>Android Application</h5>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default SoftwaresWeDevelop;
