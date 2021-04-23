import React, { PropsWithChildren } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BasicLayout from 'components/BasicLayout';
import { Button, Column, Row } from '@lubycon/ui-kit';

interface DocsSummary {
  fields: {
    path: string;
  };
  frontmatter: {
    title: string;
  };
}

interface PageTemplateProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
  pageContext: {
    previous: DocsSummary;
    next: DocsSummary;
  };
}

const PageTemplate = ({ data, pageContext }: PageTemplateProps) => {
  console.log(pageContext);
  const prevContents = pageContext.previous;
  const nextContents = pageContext.next;

  return (
    <BasicLayout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Row css={{ display: 'flex', justifyContent: 'space-between', padding: 40 }}>
        <Column xs={12} sm={3}>
          {prevContents ? (
            <NavigationButton to={prevContents.fields.path}>
              👈 {prevContents.frontmatter.title}
            </NavigationButton>
          ) : null}
        </Column>
        <Column />
        <Column xs={12} sm={3}>
          {nextContents ? (
            <NavigationButton to={nextContents.fields.path}>
              {nextContents.frontmatter.title} 👉
            </NavigationButton>
          ) : null}
        </Column>
      </Row>
    </BasicLayout>
  );
};

export default PageTemplate;

const NavigationButton = ({ to, children }: PropsWithChildren<{ to: string }>) => (
  <Link to={to}>
    <Button css={{ width: '100%' }}>{children}</Button>
  </Link>
);

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
