import { Fragment } from "react";
import Hero from "../components/home/Hero";
import CheckProduct from "../components/home/CheckProducts";
import CheckServices from "../components/home/CheckServices";
import CheckPricing from "../components/home/CheckPricing";
import About from "../components/home/About";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <CheckProduct />
      <CheckServices />
      <CheckPricing />
      <About />
    </Fragment>
  );
}
