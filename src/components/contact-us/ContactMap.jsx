
import { Link } from "react-router-dom";
import styles from "./ContactMap.module.css";

function ContactMap() {
  return (
    <div className={styles.container}>
      <div className={styles.mapcontainer}>
        {/* <Link href="https://www.google.com/maps/place/Real+Code+Solutions+Co.,+Ltd/@21.9886343,96.0728067,20z/data=!4m5!3m4!1s0x30cb6d3ab199e2b9:0xdaf9c027b676286e!8m2!3d21.988684!4d96.0728436"> */}
          <a target="_blank">
            <img
              src="/images/contact-us/map.png"
              alt="Map"
              width={1200}
              height={663.73}
            />
          </a>
        {/* </Link> */}

        {/* <Link href="https://www.google.com/maps/place/Real+Code+Solutions+Co.,+Ltd/@21.9886343,96.0728067,20z/data=!4m5!3m4!1s0x30cb6d3ab199e2b9:0xdaf9c027b676286e!8m2!3d21.988684!4d96.0728436"> */}
          <a className={styles.largermap} target="_blank">
            view larger map
          </a>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ContactMap;