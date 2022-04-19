import Button from "./Button";
import styles from "./CheckPricing.module.css";
// import useTranslation from "next-translate/useTranslation";

function CheckPricing() {
  //   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.paragraph}>
          <p className="paragraphfont">
            We try to offer our products and services with a reasonable price.
            If the work is small or manageable, we reduce the price. If we can’t
            reduce the price, we improve the quality of the product.
          </p>
          {/* <p className="paragraphfont">{t("home:check_pricing")}</p> */}
        </div>

        <div className={styles.image}>
          <img
            src="/images/home/check-pricing.png"
            alt="Check Pricing"
            width={766}
            height={496}
          />
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Button path="/pricing" label="Check Pricing" />
      </div>
    </div>
  );
}

export default CheckPricing;
