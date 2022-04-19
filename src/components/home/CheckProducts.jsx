import Button from "./Button";
import styles from "./CheckProducts.module.css";
// import useTranslation from "next-translate/useTranslation";

function CheckProduct() {
//   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="/images/home/check-products.png"
          alt="Check Products"
          width={766}
          height={496}
        />
      </div>

      <h2>
        
        {/* {t("home:product_title_1")}
        <br /> {t("home:product_title_2")}
        <br /> {t("home:product_title_3")} */}
      </h2>

      {/* <p className="paragraphfont">{t("home:product_subtitle")}</p> */}
      <Button path="/products" label="Check Products" />
    </div>
  );
}

export default CheckProduct;
