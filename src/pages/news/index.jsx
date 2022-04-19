import { Fragment } from "react";
import NewsHero from "../../components/news/NewsHero";
import OurNews from "../../components/news/OurNews";
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

export default function NewsPage({ items, error }) {
  return (
    <Fragment>
      <NewsHero />
      <OurNews items={items} error={error} />
    </Fragment>
  );
}
