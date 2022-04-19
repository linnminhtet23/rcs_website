import { Fragment } from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutHero from "../components/checkout/CheckoutHero";

export default function CheckoutPage() {
  return (
    <Fragment>
      <CheckoutHero />
      <CheckoutForm />
    </Fragment>
  );
}
