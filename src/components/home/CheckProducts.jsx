import Button from "./Button";
import styles from "./CheckProducts.module.css";
import data from "../../locales/en-US/home.json";
// import useTranslation from "next-translate/useTranslation";

function CheckProduct() {
  //   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="/images/home/check-products.png"
          alt="Check Products"
          // width={766}
          // height={496}
          className={styles.productimage}
        />
      </div>

      <h2>
        {data.product_title_1}
        <br />
        {data.product_title_2}
        <br />
        {data.product_title_3}
      </h2>
      <p className="paragraphfont">{data.product_subtitle}</p>
      <Button path="/products" label="Check Products" />
    </div>
  );
}

export default CheckProduct;
