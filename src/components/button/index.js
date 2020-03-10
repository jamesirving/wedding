import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '../link';

import { space, colors, globalStyles, fontWeight } from '../../styles';

const ButtonLink = styled(Link)`
  background-color: ${colors.white};
  border-radius: 5px;
  border: 2px solid ${colors.white};
  color: ${colors.black};
  display: inline-flex;
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  margin-top: ${space.x2};
  padding: ${space.x1} ${space.x2};
`;

const Button = ({linkType, url, children}) => {
  return <ButtonLink linkType={linkType} url={url}>{children}</ButtonLink>;
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

export { Button };