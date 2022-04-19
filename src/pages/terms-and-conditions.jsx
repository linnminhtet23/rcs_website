import { Fragment } from "react";
import TermsConditions from "../components/terms-conditions/TermsConditions";
import TermsConditionsHero from "../components/terms-conditions/TermsConditionsHero";

export default function TermsAndConditionsPage() {
  return (
    <Fragment>
      <TermsConditionsHero />
      <TermsConditions />
    </Fragment>
  );
}
