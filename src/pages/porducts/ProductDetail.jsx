import { Fragment } from "react";
import ProductDetail from "../../components/product/ProductDetail";
import ProductHero from "../../components/product/ProductHero";
import Information from "../../components/Information";
import {
  getDetailProduct,
  getFeaturedProducts,
  getProducts,
} from "../../data/products";
import {
  getDetailProductMM,
  getFeaturedProductsMM,
} from "../../data/productsMM";
import { getClientSuccess } from "../../data/clientSuccess";
import { getClientSuccessMM } from "../../data/clientSuccessMM";

export async function getStaticProps(context) {
  const { params, locale } = context;
  const id = params.id;

  const product =
    locale === "en-US"
      ? getDetailProduct(id)
      : locale === "mm"
      ? getDetailProductMM(id)
      : {};
  const featuredProducts =
    locale === "en-US"
      ? getFeaturedProducts()
      : locale === "mm"
      ? getFeaturedProductsMM()
      : [];
  const items =
    locale === "en-US"
      ? getClientSuccess()
      : locale === "mm"
      ? getClientSuccessMM()
      : [];

  return {
    props: {
      product,
      featuredProducts,
      items,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const products = getProducts();
  const paths = [];

  locales.forEach((locale) => {
    products.forEach((product) => {
      paths.push({ params: { id: product.id }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export default function ProductDetailPage({
  product,
  featuredProducts,
  items,
}) {
  return (
    <Fragment>
      <ProductHero featuredProducts={featuredProducts} />
      <ProductDetail product={product} />
      <Information items={items} />
    </Fragment>
  );
}
