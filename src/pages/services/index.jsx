import { Fragment } from "react";
import OurServices from "../../components/services/OurServices";
import ServicesHero from "../../components/services/ServicesHero";
import Information from "../../components/Information";

export default function ServicesPage() {
  return (
    <Fragment>
      <ServicesHero />
      <OurServices />
      <Information/>
    </Fragment>
  );
}
