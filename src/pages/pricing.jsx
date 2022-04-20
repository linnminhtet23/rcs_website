import { Fragment, useEffect, useState } from "react";
import OurPricing from "../components/pricing/OurPricing";
import PricingHero from "../components/pricing/PricingHero";
import { getProductsByPrice } from "../data/products";
import { getProductsByPriceMM } from "../data/productsMM";
import TechnologiesWeUse from "../shared-components/TechnologiesWeUse";

// export async function getStaticProps(context) {
//   const { locale } = context;

//   const productsBetween200000And300000 =
//     locale === "en-US"
//       ? getProductsByPrice(200000, 300000)
//       : locale === "mm"
//       ? getProductsByPriceMM(200000, 300000)
//       : [];
//   const productsBetween300000And400000 =
//     locale === "en-US"
//       ? getProductsByPrice(300000, 400000)
//       : locale === "mm"
//       ? getProductsByPriceMM(300000, 400000)
//       : [];

//   return {
//     props: {
//       productsBetween200000And300000,
//       productsBetween300000And400000,
//     },
//   };
// }

export default function PricingPage() {
  const [productsBetween200000And300000, setproductsBetween200000And300000]=useState([]);
  const [productsBetween300000And400000, setproductsBetween300000And400000] = useState([]);

  useEffect(()=>{
    setproductsBetween200000And300000(getProductsByPrice(200000,300000));
    setproductsBetween300000And400000(getProductsByPrice(300000,400000));
  },[]);
  return (
    <Fragment>
      <PricingHero />
      <OurPricing
        productsBetween200000And300000={productsBetween200000And300000}
        productsBetween300000And400000={productsBetween300000And400000}
      />
      <TechnologiesWeUse />
    </Fragment>
  );
}
