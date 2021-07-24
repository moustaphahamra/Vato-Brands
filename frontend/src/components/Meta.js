import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Vato Brands",
  description: 'We sell the best products for the best prices',
  keywords: "the best quality in the market, the best fit for the best clients",
};

export default Meta;
