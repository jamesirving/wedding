import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Feature} from '../feature'
import {H1, P} from '../type'


const OBJECT_POSITION = '50% 50%';
const HEIGHT = '90vh';



const PageHeader = ({image, preheading, heading, subheading}) => (
  <Feature image={image} objectPosition={OBJECT_POSITION} height={HEIGHT}>
    {preheading && (<P color='white'>{preheading}</P>)}
    {heading && (<H1 color='white'>{heading}</H1>)}
    {subheading && (<P color='white'>{subheading}</P>)}
  </Feature>
)

PageHeader.propTypes = {
  image: PropTypes.object, 
  preheading: PropTypes.string,
  heading: PropTypes.string,
  subheading:PropTypes.string,
}

export { PageHeader }