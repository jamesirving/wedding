import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from "react-markdown";

import Layout from '../components/Layout'
import { Feature } from '../components/feature'
import { ContentImage } from '../components/content-image'
import { H1, H2, P } from '../components/type'
import { Button } from '../components/button'

export const IndexPageTemplate = ({
  pageHeaderBlock,
  detailsBlock,
  rsvpBlock,
}) => (
  <div>
    <Feature image={pageHeaderBlock.image} objectPosition='50% 50%' height="400px">
      {pageHeaderBlock.preheading && (<P color='white'>{pageHeaderBlock.preheading}</P>)}
      {pageHeaderBlock.heading && (<H1 color='white'>{pageHeaderBlock.heading}</H1>)}
      {pageHeaderBlock.subheading && (<P color='white'>{pageHeaderBlock.subheading}</P>)}
    </Feature>
    <ContentImage contentPosition="left">
      {detailsBlock.heading && (<H2>{detailsBlock.heading}</H2>)}
      {detailsBlock.body && (<ReactMarkdown source={detailsBlock.body} />)}
    </ContentImage>
    <Feature  image={rsvpBlock.image} objectPosition='50% 50%' height="400px" >
      {rsvpBlock.preheading && (<P color='white'>{rsvpBlock.preheading}</P>)}
      {rsvpBlock.heading && (<H1 color='white'>{rsvpBlock.heading}</H1>)}
      {rsvpBlock.button && (<Button {...rsvpBlock.button} >{rsvpBlock.button.text}</Button>)}
    </Feature>
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
`
