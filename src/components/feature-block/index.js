import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Feature } from '../feature'
import { H1, P } from '../type'
import { Button } from '../button'

const OBJECT_POSITION = '50% 50%';
const HEIGHT = '90vh';


const FeatureBlock = ({image, preheading, heading, button}) => (
  <Feature image={image} objectPosition={OBJECT_POSITION} height={HEIGHT}>
    {preheading && (<P color='white'>{preheading}</P>)}
    {heading && (<H1 color='white'>{heading}</H1>)}
    {button && (<Button href={button.href} to={button.to}>{button.text}</Button>)}
  </Feature>
)

FeatureBlock.propTypes = {
  image: PropTypes.object, 
  preheading: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.objectOf({
    text: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string,
  }),
}

export { FeatureBlock }