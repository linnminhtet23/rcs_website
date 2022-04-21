import { Fragment, useEffect, useState } from "react";
import ServiceHero from "../../components/service/ServiceHero";
import Information from "../../components/Information";
import WebAppServiceDetail from "../../components/service/WebAppServiceDetail";
import { featuredServices } from "../../data/featuredServices";


export default function WebAppServicePage() {
  const [featuredServicesData, setFeaturedServicesData] = useState([]);

  useEffect(() => {
    setFeaturedServicesData(featuredServices)
  }, []);
  return (
    <Fragment>
      <ServiceHero featuredServices={featuredServicesData} />
      <WebAppServiceDetail />
      <Information />
    </Fragment>
  );
}
