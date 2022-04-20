import Button from "./Button";
import styles from "./CheckPricing.module.css";
import data from "../../locales/en-US/home.json";
// import useTranslation from "next-translate/useTranslation";

function CheckPricing() {
  //   const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.paragraph}>
          <p className="paragraphfont">
            {data.check_pricing}
          </p>
          {/* <p className="paragraphfont">{t("home:check_pricing")}</p> */}
        </div>

        <div className={styles.image}>
          <img
            src="/images/home/check-pricing.png"
            alt="Check Pricing"
            // width={766}
            // height={496}
            className={styles.pricingimage}
          />
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Button path="/pricings" label="Check Pricing" />
      </div>
    </div>
  );
}

export default CheckPricing;
