import { Fragment } from "react";
import ServiceHero from "../../components/service/ServiceHero";
import Information from "../../components/Information";
import { getClientSuccess } from "../../data/clientSuccess";
import { getClientSuccessMM } from "../../data/clientSuccessMM";
import WebsiteServiceDetail from "../../components/service/WebsiteServiceDetail";
import { featuredServicesMM } from "../../data/featuredServicesMM";
import { featuredServices } from "../../data/featuredServices";

export async function getStaticProps(context) {
  const { locale } = context;

  const featuredServicesData =
    locale === "en-US" ? featuredServices : featuredServicesMM;

  const items =
    locale === "en-US"
      ? getClientSuccess()
      : locale === "mm"
      ? getClientSuccessMM()
      : [];

  return {
    props: {
      featuredServicesData,
      items,
    },
  };
}

export default function WebsiteServicePage({ featuredServicesData, items }) {
  return (
    <Fragment>
      <ServiceHero featuredServices={featuredServicesData} />
      <WebsiteServiceDetail />
      <Information items={items} />
    </Fragment>
  );
}
