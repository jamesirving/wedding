import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { space, colors, globalStyles, fontWeight } from '../../styles'

const Link = styled(GatsbyLink)`
  background-color: ${colors.white};
  color: ${colors.black};
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  padding: ${space.x0} ${space.x1};
`

const Button = ({ to, href, children}) => {
  return <Link to={to} href={href}>{children}</Link>;
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
}

export { Button };