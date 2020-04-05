import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../components/layout';
import { Feature } from '../components/feature';
import { ContentImage } from '../components/content-image';
import { H1, H2, P, Preheading } from '../components/type';
import { Button } from '../components/button';
import { Link } from '../components/link';

export const IndexPageTemplate = ({ pageHeaderBlock, contentImageBlock, featureBlock }) => (
  <div>
    <Feature image={pageHeaderBlock.image} objectPosition="50% 50%" height="90vh">
      {pageHeaderBlock.preheading && <Preheading color="white">{pageHeaderBlock.preheading}</Preheading>}
      {pageHeaderBlock.heading && <H1 color="white">{pageHeaderBlock.heading}</H1>}
      {pageHeaderBlock.subheading && <P color="white">{pageHeaderBlock.subheading}</P>}
    </Feature>
    <ContentImage image={contentImageBlock.image} contentPosition="left" height="400px">
      {contentImageBlock.heading && <H2>{contentImageBlock.heading}</H2>}
      {contentImageBlock.dateTime && <P>{contentImageBlock.dateTime}</P>}
      {contentImageBlock.location && <ReactMarkdown source={contentImageBlock.location} />}
      {contentImageBlock.mapLink && (
        <Link linkType="external" url={contentImageBlock.mapLink.url}>
          {contentImageBlock.mapLink.text}
        </Link>
      )}
    </ContentImage>
    <Feature image={featureBlock.image} objectPosition="50% 50%" height="90vh">
      {featureBlock.preheading && <Preheading color="white">{featureBlock.preheading}</Preheading>}
      {featureBlock.heading && <H1 color="white">{featureBlock.heading}</H1>}
      {featureBlock.button && (
        <Button mt="2rem" {...featureBlock.button}>
          {featureBlock.button.text}
        </Button>
      )}
    </Feature>
  </div>
);

IndexPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
  contentImageBlock: PropTypes.object,
  featureBlock: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        pageHeaderBlock={frontmatter.pageHeaderBlock}
        contentImageBlock={frontmatter.contentImageBlock}
        featureBlock={frontmatter.featureBlock}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        contentImageBlock {
          heading
          dateTime
          location
          mapLink {
            text
            url
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        featureBlock {
          preheading
          heading
          button {
            text
            url
            linkType
          }
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
