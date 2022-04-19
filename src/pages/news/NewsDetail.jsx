import { Fragment } from "react";
import NewHero from "../../components/new/NewHero";
import PostDetailCard from "../../shared-components/PostDetailCard";
import configs from "../../configs.json";

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

export default function NewsDetailPage({ item, error }) {
  return (
    <Fragment>
      <NewHero item={item} error={error} />
      <PostDetailCard item={item} error={error} />
    </Fragment>
  );
}
