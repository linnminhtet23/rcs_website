// import Link from "next/link";
import { Link } from "react-router-dom";
import styles from "./CheckoutBtn.module.css";

function CheckoutBtn({ path }) {
  return (
    <Link to={`/checkout/${path}`}>
      <button className={styles.btn}>Check Out</button>
    </Link>
  );
}

export default CheckoutBtn;
