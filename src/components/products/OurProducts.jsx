import Card from "../../shared-components/Card";
import styles from "./OurProducts.module.css";

function OurProducts({ products }) {
  
  return (
    <div className={styles.container}>
      <h1>Our Products</h1>
      <div className={styles.cardcontainer}>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            descriptions={product.featuresIncluded}
            path={`/products/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
