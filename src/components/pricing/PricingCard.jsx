
import styles from "./PricingCard.module.css";

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
        {/* <Link href={path}> */}
          <a className={styles.btn} style={{ marginRight: "8px" }}>
            Read More
          </a>
        {/* </Link> */}

        {/* <Link href={`/checkout/${name}`}> */}
          <a className={styles.btn}>Check Out</a>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default PricingCard;
