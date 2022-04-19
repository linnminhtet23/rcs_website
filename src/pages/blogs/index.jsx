import { Fragment } from "react";
import BlogsHero from "../../components/blogs/BlogsHero";
import OurBlogs from "../../components/blogs/OurBlogs";
import configs from "../../config.json";

export async function getServerSideProps() {
  let data = null;
  let error = null;

  try {
    const res = await fetch(`${configs.STRAPI_URL}/blogs`);
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

export default function BlogsPage({items, error}) {
  return (
    <Fragment>
      <BlogsHero />
      <OurBlogs items={items} error={error} />
    </Fragment>
  );
}
