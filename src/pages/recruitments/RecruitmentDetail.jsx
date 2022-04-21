import { Fragment } from "react";
import NewHero from "../../components/new/NewHero";
import PostDetailCard from "../../shared-components/PostDetailCard";
import configs from "../../configs.json";
import RecruitmentHero from "../../components/recruitments/RecruitmentHero";

export async function getServerSideProps(context) {
  const { id } = context.query;

  let data = null;
  let error = null;

  try {
    const res = await fetch(`${configs.STRAPI_URL}/news/${id}`);
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  return { 
    props: {
      item: data,
      error: error,
    },
  };
}

export default function RecruitmentDetailPage({ item, error }) {
  return (
    <Fragment>
      <RecruitmentHero item={item} error={error} />
      <PostDetailCard item={item} error={error} />
    </Fragment>
  );
}
