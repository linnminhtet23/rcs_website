import { Fragment } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutOurCompany from "../components/about/AboutOurCompany";
import OurTeam from "../components/about/OurTeam";
import Speech from "../components/about/Speech";

export default function AboutPage() {
  return (
    <Fragment>
      <AboutHero />
      <Speech />
      <AboutOurCompany />
      <OurTeam />
    </Fragment>
  );
}
