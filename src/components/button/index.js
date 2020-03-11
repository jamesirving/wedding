import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space as styledSystemSpace } from 'styled-system';
import { Link } from '../link';

import { space, colors, globalStyles, fontWeight } from '../../styles';

const themes = {
  light: css`
    background-color: ${colors.white};
    border: 2px solid ${colors.white};
    color: ${colors.black};
  `,
  dark: css`
    background-color: ${colors.black};
    border-color: ${colors.black};
    color: ${colors.white};
  `,
};

const ButtonLink = styled(Link)`
  ${styledSystemSpace}
  ${props => themes[props.theme]}
  border-radius: 5px;
  display: inline-flex;
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  padding: ${space.x1} ${space.x2};
  text-transform: uppercase;
  transition: all ${globalStyles.transitionSpeed} ${globalStyles.easing};

  &:hover {
    ${props => themes[props.theme === 'dark' ? 'light' : 'dark']}
    border-color: ${colors.black};
  }
`;

const Button = ({ linkType = 'internal', url, theme = 'light', children, ...props }) => {
  return (
    <ButtonLink theme={theme} linkType={linkType} url={url} {...props}>
      {children}
    </ButtonLink>
  );
};

Button.propTypes = {
  linkType: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(['dark', 'light']),
};

export { Button };
