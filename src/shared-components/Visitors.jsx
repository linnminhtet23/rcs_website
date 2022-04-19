import styles from "./Visitors.module.css";

function Visitors({ visitors }) {
  return (
    <div className={styles.container}>
      <span className={styles.visitors}>visitors :</span>
      <span>{visitors.toLocaleString()}</span>
    </div>
  );
}

export default Visitors;
