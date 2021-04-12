import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from 'src/models/site';
import { FluidImageSharp } from 'src/models/image';

interface QueryResult {
  site: {
    siteMetadata: SiteMetadata;
  };
  thumbnail: FluidImageSharp;
}

export function useSiteMetaData() {
  const {
    site: { siteMetadata },
  } = useStaticQuery<QueryResult>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
          }
        }
      }
    `
  );

  return {
    ...siteMetadata,
  };
}
