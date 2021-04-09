import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BasicLayout from 'components/BasicLayout';

interface PageTemplateProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const PageTemplate = ({ data }: PageTemplateProps) => {
  console.log(data);
  return (
    <BasicLayout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </BasicLayout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
