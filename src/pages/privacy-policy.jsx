
import { Fragment } from "react";
import PrivacyPolicy from "../components/privacy-policy/PrivacyPolicy";
import PrivacyPolicyHero from "../components/privacy-policy/PrivacyPolicyHero";

export default function PrivacyPolicyPage() {
  return (
    <Fragment>
      <PrivacyPolicyHero />
      <PrivacyPolicy />
    </Fragment>
  );
}
