import { Fragment, useEffect, useState } from "react";
import OurProducts from "../../components/products/OurProducts";
import ProductsHero from "../../components/products/ProductHero";
import Information from "../../components/Information";
import { getProducts } from "../../data/products";

export default function ProductsPage() {
  const [products, setProducts]=useState([]);
  useEffect(()=>{
  setProducts(getProducts());
  },[]);
  
  return (
    <Fragment>
      <ProductsHero />
      <OurProducts products={products} />
      <Information/>
    </Fragment>
  );
}
