import { Fragment, useState ,useEffect} from "react";
import ServiceHero from "../../components/service/ServiceHero";
import Information from "../../components/Information";
import WebsiteServiceDetail from "../../components/service/WebsiteServiceDetail";
import { featuredServices } from "../../data/featuredServices";

export default function WebsiteServicePage() {
  const [featuredServicesData, setFeaturedServicesData] = useState([]);
  useEffect(() => {
    setFeaturedServicesData(featuredServices)
  }, []);

  return (
    <Fragment>
      <ServiceHero featuredServices={featuredServicesData} />
      <WebsiteServiceDetail />
      <Information />
    </Fragment>
  );
}
