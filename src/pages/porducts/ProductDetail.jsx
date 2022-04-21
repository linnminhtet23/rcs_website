import { Fragment, useEffect, useState } from "react";
import ProductDetail from "../../components/product/ProductDetail";
import ProductHero from "../../components/product/ProductHero";
import Information from "../../components/Information";
import {
  getDetailProduct,
  getFeaturedProducts,
} from "../../data/products";

import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    setFeaturedProducts(getFeaturedProducts());
    setProduct(getDetailProduct(params.id));
  },[params.id]);

  if (product === null) return <h1>Loading...</h1>
  
  return (
    <Fragment>
      <ProductHero featuredProducts={featuredProducts} />
      <ProductDetail product={product} />
      <Information/>
    </Fragment>
  );

}
