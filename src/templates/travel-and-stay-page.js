import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Feature } from '../components/feature';
import { Details } from '../components/details';
import { Heading, P, Preheading } from '../components/typography';

export const TravelAndStayPageTemplate = ({ pageHeaderBlock, detailsBlock }) => (
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

TravelAndStayPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
  detailsBlock: PropTypes.object,
};

const TravelAndStayPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <TravelAndStayPageTemplate pageHeaderBlock={frontmatter.pageHeaderBlock} detailsBlock={frontmatter.detailsBlock} />
  );
};

TravelAndStayPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TravelAndStayPage;

export const pageQuery = graphql`
  query TravelAndStayPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "travel-and-stay-page" } }) {
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
