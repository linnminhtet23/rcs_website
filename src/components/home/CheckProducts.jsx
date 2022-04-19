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
        We offer two types of solutions for you or your company.
        <br />
        Products and Services
        <br />
        Ready-made products and services are available to solve business
        problems
        {/* {t("home:product_title_1")}
        <br /> {t("home:product_title_2")}
        <br /> {t("home:product_title_3")} */}
      </h2>
      <p className="paragraphfont">
        All of our products were developed by circling through the requirement
        analysing, building based upon the real world datas, testing under
        various test methods and situations, and finally when the products meet
        their best potential, we deliver them to the public.
      </p>
      {/* <p className="paragraphfont">{t("home:product_subtitle")}</p> */}
      <Button path="/products" label="Check Products" />
    </div>
  );
}

export default CheckProduct;
