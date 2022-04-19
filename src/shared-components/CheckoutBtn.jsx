// import Link from "next/link";
import styles from "./CheckoutBtn.module.css";

function CheckoutBtn({ path }) {
  return (
    // <Link href={`/checkout/${path}`}>
      <a className={styles.btn}>Check Out</a>
    // </Link>
  );
}

export default CheckoutBtn;
