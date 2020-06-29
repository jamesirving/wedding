import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import { Feature } from '../components/feature';
import { Details } from '../components/details';
import { Heading, P, Preheading } from '../components/type';

export const DetailsPageTemplate = ({ pageHeaderBlock, detailsBlock }) => (
  <div>
    <Feature image={pageHeaderBlock.image} objectPosition="50% 40%" height="50vh">
      {pageHeaderBlock.preheading && <Preheading color="white">{pageHeaderBlock.preheading}</Preheading>}
      {pageHeaderBlock.heading && (
        <Heading variant="h1" color="white">
          {pageHeaderBlock.heading}
        </Heading>
      )}
      {pageHeaderBlock.subheading && <P color="white">{pageHeaderBlock.subheading}</P>}
    </Feature>
    <Details details={detailsBlock} />
  </div>
);

DetailsPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
  detailsBlock: PropTypes.object,
};

const DetailsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DetailsPageTemplate pageHeaderBlock={frontmatter.pageHeaderBlock} detailsBlock={frontmatter.detailsBlock} />
    </Layout>
  );
};

DetailsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DetailsPage;

export const pageQuery = graphql`
  query DetailsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "details-page" } }) {
      frontmatter {
        pageHeaderBlock {
          preheading
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        detailsBlock {
          heading
          detail
        }
      }
    }
  }
`;
