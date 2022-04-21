import { Fragment } from "react";
import CheckProduct from "../components/home/CheckProducts";
import CheckServices from "../components/home/CheckServices";
import CheckPricing from "../components/home/CheckPricing";
import About from "../components/home/About";
import Hero from "../shared-components/Hero";

export default function Home() {
  return (
    <Fragment>
      <Hero      path="/images/home/rcs-banner.jpg"
      miniPath="/images/home/rcs-banner.jpg" />
    
      <CheckProduct />
      <CheckServices />
      <CheckPricing />
      <About />
    </Fragment>
  );
}
