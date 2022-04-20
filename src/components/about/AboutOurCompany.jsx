import styles from "./AboutOurCompany.module.css";
import data from "../../locales/en-US/about.json";


function AboutOurCompany() {

  return (
    <div className={styles.container}>
      <h1>About Our Company</h1>
      <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
        <p>{data["description-1"]}</p>
        <p>{data["description-2"]}</p>
        <p>{data["description-3"]}</p>
      </div>
    </div>
  );
}

export default AboutOurCompany;
