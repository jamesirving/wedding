import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import { Feature } from '../components/feature';
import { Heading, P, Preheading } from '../components/typography';

export const RsvpPageTemplate = ({ pageHeaderBlock }) => (
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
  </div>
);

RsvpPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
};

const RsvpPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <RsvpPageTemplate pageHeaderBlock={frontmatter.pageHeaderBlock} />
    </Layout>
  );
};

RsvpPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default RsvpPage;

export const pageQuery = graphql`
  query RsvpPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "rsvp-page" } }) {
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
      }
    }
  }
`;
