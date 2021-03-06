import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Layout } from '../components/layout';
import { Feature } from '../components/feature';
import { Heading, P, Preheading } from '../components/typography';
import { RsvpForm } from '../components/rsvp-form';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

export const RsvpPageTemplate = ({ pageHeaderBlock }) => (
  <div>
    <Feature image={pageHeaderBlock.image} objectPosition="50% 50%" height="50vh">
      {pageHeaderBlock.preheading && <Preheading color="white">{pageHeaderBlock.preheading}</Preheading>}
      {pageHeaderBlock.heading && (
        <Heading variant="h1" color="white">
          {pageHeaderBlock.heading}
        </Heading>
      )}
      {pageHeaderBlock.subheading && <P color="white">{pageHeaderBlock.subheading}</P>}
    </Feature>
    <RsvpForm />
  </div>
);

RsvpPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
};

const RsvpPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  if (!RECAPTCHA_KEY) {
    // eslint-disable-next-line no-console
    console.log('RECAPTCHA_KEY error: ', RECAPTCHA_KEY);
    return (
      <Layout>
        <RsvpPageTemplate pageHeaderBlock={frontmatter.pageHeaderBlock} />
      </Layout>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
      <Layout>
        <RsvpPageTemplate pageHeaderBlock={frontmatter.pageHeaderBlock} />
      </Layout>
    </GoogleReCaptchaProvider>
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
        detailsBlock {
          heading
          detail
        }
      }
    }
  }
`;
