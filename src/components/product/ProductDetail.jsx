import ProductDetailCard from "../products/ProductDetailCard";
import styles from "./ProductDetail.module.css";

function ProductDetail({ product }) {
  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <ProductDetailCard
        name={product.name}
        image={product.image}
        about={product.about}
        featuresIncluded={product.featuresIncluded}
        servicesIncluded={product.servicesIncluded}
        featuresSoftware={product.featuresSoftware}
        requiredEquipments={product.requiredEquipments}
        benefits={product.benefits}
        note={product.note}
      />
    </div>
  );
}

export default ProductDetail;
