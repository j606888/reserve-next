import Layout from "@/components/Layout";
import ServiceListContainer from "@/containers/ServiceListContainer";
const Services = () => {
  return <ServiceListContainer />;
};

Services.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Services;
