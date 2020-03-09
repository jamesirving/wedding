import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { PageHeader } from '../components/page-header'
import { FeatureBlock } from '../components/feature-block'
import { ContentImageBlock } from '../components/content-image-block'

export const IndexPageTemplate = ({
  pageHeaderBlock,
  detailsBlock,
  rsvpBlock,
}) => (
  <div>
    <PageHeader {...pageHeaderBlock} />
    <ContentImageBlock {...detailsBlock} contentPosition="right"/>
    <FeatureBlock {...rsvpBlock} />
  </div>
)

IndexPageTemplate.propTypes = {
  pageHeaderBlock: PropTypes.object,
  detailsBlock: PropTypes.object,
  rsvpBlock: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        pageHeaderBlock={frontmatter.pageHeaderBlock}
        detailsBlock={frontmatter.detailsBlock}
        rsvpBlock={frontmatter.rsvpBlock}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

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
        detailsBlock {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        rsvpBlock {
          preheading
          heading
          button {
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
      }
    }
  }
`
