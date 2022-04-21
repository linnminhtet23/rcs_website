
import styles from "./PricingCard.module.css";
import {Link} from "react-router-dom";

function PricingCard({ image, name, category, path }) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={name}
        width={220}
        height={150}
        className={styles.image}
      />
      <h2>{name}</h2>
      <h4 className={styles.category}>{category}</h4>
      <div className={styles.btncontainer}>
        <Link to={path}>
          <button className={styles.btn} style={{ marginRight: "8px" }}>
            Read More
          </button>
        </Link>

        <Link to={`/checkout/${name}`}>
          <button className={styles.btn}>Check Out</button>
         </Link>
      </div>
    </div>
  );
}

export default PricingCard;
