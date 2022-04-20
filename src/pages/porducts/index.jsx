import { Fragment, useEffect, useState } from "react";
import OurProducts from "../../components/products/OurProducts";
import ProductsHero from "../../components/products/ProductHero";
import Information from "../../components/Information";
import { getProducts } from "../../data/products";
import { getClientSuccess } from "../../data/clientSuccess";

export default function ProductsPage() {
  const [products, setProducts]=useState([]);
  const [items, setItems] = useState([]);
  useEffect(()=>{
  setProducts(getProducts());
  setItems(getClientSuccess());
  },[]);
  return (
    <Fragment>
      <ProductsHero />
      <OurProducts products={products} />
      <Information/>
    </Fragment>
  );
}
