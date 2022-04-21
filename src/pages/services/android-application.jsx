import { Fragment, useEffect, useState } from "react";
import ServiceHero from "../../components/service/ServiceHero";
import Information from "../../components/Information";
import AndroidAppServiceDetail from "../../components/service/AndroidAppServiceDetail";
import { featuredServices } from "../../data/featuredServices";


export default function AndroidAppServicePage() {
  const [featuredServicesData, setFeaturedServicesData] = useState([]);

  useEffect(() => {
    setFeaturedServicesData(featuredServices)
  }, []);
  return (
    <Fragment>
      <ServiceHero featuredServices={featuredServicesData} />
      <AndroidAppServiceDetail />
      <Information />
    </Fragment>
  );
}
