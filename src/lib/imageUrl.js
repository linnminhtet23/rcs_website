import configs from "../config.json";

const urlBuilder = (src) => {
  const fullUrl = configs.STRAPI_URL + src;
  return fullUrl;
};

export default urlBuilder;
