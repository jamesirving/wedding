import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Feature } from '../components/feature';
import { Heading, P, Preheading } from '../components/typography';
import { Layout } from '../components/layout';
import { RsvpForm } from '../components/rsvp-form';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

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
    <RsvpForm />
  </div>
);

RsvpPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
};

const RsvpPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  // if (typeof RECAPTCHA_KEY === 'undefined') {
  //   return (
  //     <Heading variant="h1" color="black">
  //       Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! You probably forget to set it in your Netlify build
  //       environment variables.
  //     </Heading>
  //   );
  // }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
      <Layout>
        <RsvpPageTemplate pageHeaderBlock={frontmatter.pageHeaderBlock} detailsBlock={frontmatter.detailsBlock} />
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
