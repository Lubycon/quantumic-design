import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetaData } from 'src/hooks/useSiteMetaData';

function SEO() {
  const { title, description, siteUrl, author } = useSiteMetaData();

  const defaultMeta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: 'google-site-verification',
      content: 'YAV889Ju0hL7GVty8_u0QAk_34_T9ZBVGtJeppmDSec',
    },
  ];

  const siteData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: siteUrl,
    mainEntityOfPage: siteUrl,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    creator: {
      '@type': 'Person',
      name: author,
    },
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ko',
      }}
      title={title}
      meta={defaultMeta}
    >
      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json">{JSON.stringify(siteData)}</script>
    </Helmet>
  );
}

export default SEO;
