import { Fragment, useState ,useEffect} from "react";
import ServiceHero from "../../components/service/ServiceHero";
import Information from "../../components/Information";
import { getClientSuccess } from "../../data/clientSuccess";
import { getClientSuccessMM } from "../../data/clientSuccessMM";
import WebsiteServiceDetail from "../../components/service/WebsiteServiceDetail";
import { featuredServicesMM } from "../../data/featuredServicesMM";
import { featuredServices } from "../../data/featuredServices";

export default function WebsiteServicePage() {
  const [featuredServicesData, setFeaturedServicesData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setFeaturedServicesData(featuredServices)
  }, []);

  return (
    <Fragment>
      <ServiceHero featuredServices={featuredServicesData} />
      <WebsiteServiceDetail />
      <Information items={items} />
    </Fragment>
  );
}
