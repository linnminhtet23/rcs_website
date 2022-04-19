import styles from "./OurPricing.module.css";
import PricingCard from "./PricingCard";

function OurPricing({
  productsBetween200000And300000,
  productsBetween300000And400000,
}) {
  return (
    <div className={styles.container}>
      <h1>Pricing Rate 200,000 ~ 300,000</h1>
      <div className={styles.cardcontainer}>
        <PricingCard
          path="/services/website"
          image="/images/services/website/basic-website-package.jpg"
          name="Basic Website"
          category="Service"
        />

        {productsBetween200000And300000.map((item) => (
          <PricingCard
            key={item.id}
            path={`/products/${item.id}`}
            image={item.image}
            name={item.name}
            category="Product"
          />
        ))}
      </div>
      <h1>Pricing Rate 300,000 ~ 500,000</h1>
      <div className={styles.cardcontainer}>
        <PricingCard
          path="/services/website"
          image="/images/services/website/standard-website-package.jpg"
          name="Standard Website"
          category="Service"
        />

        <PricingCard
          path="/services/web-application"
          image="/images/services/web-application/web-application-2.jpg"
          name="Web Application"
          category="Service"
        />

        <PricingCard
          path="/services/android-application"
          image="/images/services/android-application/android-application.jpg"
          name="Android Application"
          category="Service"
        />

        {productsBetween300000And400000.map((item) => (
          <PricingCard
            key={item.id}
            path={`/products/${item.id}`}
            image={item.image}
            name={item.name}
            category="Product"
          />
        ))}
      </div>

      <h1>Pricing Rate 500,000 ~ .......</h1>
      <div className={styles.cardcontainer}>
        <PricingCard
          path="/services/website"
          image="/images/services/website/first-class-website-package.jpg"
          name="First Class Website"
          category="Service"
        />

        <PricingCard
          path="/services/website"
          image="/images/services/website/e-commerce.jpg"
          name="E-Commerce Website"
          category="Service"
        />
      </div>
    </div>
  );
}

export default OurPricing;
