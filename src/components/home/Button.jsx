// import Link from "next/link";
import styles from "./Button.module.css";

function Button({ path, label }) {
  return (
    // <Link href={path}>
      <a className={styles.btn}>{label}</a>
    // </Link>
  );
}

export default Button;
