import { Fragment } from "react";
import BlogHero from "../../components/blog/BlogHero";
import PostDetailCard from "../../shared-components/PostDetailCard";
import configs from "../../configs.json";

export async function getServerSideProps(context) {
  const { id } = context.query;

  let data = null;
  let error = null;

  try {
    const res = await fetch(`${configs.STRAPI_URL}/blogs/${id}`);
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

export default function BlogDetailPage({ item, error }) {
  return (
    <Fragment>
      <BlogHero item={item} error={error} />
      <PostDetailCard item={item} error={error} />
    </Fragment>
  );
}
