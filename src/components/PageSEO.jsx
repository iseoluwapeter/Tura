import { Helmet } from "react-helmet-async";

const PageSEO = ({ title, description, canonical, noIndex = false }) => {
  const siteName = "Tuuraa";
  const defaultDescription =
    "Managed last-mile logistics for Lagos SMEs — accountability-first, subscription-based delivery.";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default PageSEO;
