import { Fragment } from "react";
import OurRecruitment from "../../components/recruitments/OurRecruitment";
import RecruitmentHero from "../../components/recruitments/RecruitmentHero";
import configs from "../../config.json";

export async function getServerSideProps() {
  let data = null;
  let error = null;

  try {
    const res = await fetch(`${configs.STRAPI_URL}/news`);
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  return {
    props: { 
      items: data,
      error: error,
    },
  };
}

export default function RecruitmentPage({ items, error }) {
  return (
    <Fragment>
      <RecruitmentHero />
      <OurRecruitment items={items} error={error} />
    </Fragment>
  );
}
