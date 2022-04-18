
import styles from "./PageNotFoundComponent.module.css";

function PageNotFoundComponent() {
  return (
    <div className={styles.container}>
      <img src="/images/404/404.png" alt="404" width={766} height={496} />
      <h3>Oh,no! This page does not exist.</h3>
      {/* <Link href="/"> */}
        <a className={styles.btn}>Go back to home</a>
      {/* </Link> */}
    </div>
  );
}

export default PageNotFoundComponent;
