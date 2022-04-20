// import Link from "next/link";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ path, label }) {
  return (
    <Link to={path}>
      <a className={styles.btn}>{label}</a>
    </Link>
  );
}

export default Button;
