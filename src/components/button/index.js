import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space as styledSystemSpace } from 'styled-system';
import { Link } from '../link';

import { space, colors, globalStyles, fontWeight } from '../../styles';

const lightTheme = css`
  background-color: ${colors.white};
  border: 2px solid ${colors.white};
  color: ${colors.black};
`;

const darkTheme = css`
  background-color: ${colors.black};
  border-color: ${colors.black};
  color: ${colors.white};
`;

const ButtonLink = styled(Link)`
  ${styledSystemSpace}
  ${lightTheme}
  border-radius: 5px;
  display: inline-flex;
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  padding: ${space.x1} ${space.x2};
  text-transform: uppercase;
  transition: all ${globalStyles.transitionSpeed} ${globalStyles.easing};

  &:hover {
    ${darkTheme}
  }

  ${props =>
    props.theme === 'dark' &&
    css`
    ${darkTheme}

    &:hover {
      ${lightTheme}
      border-color: ${colors.black};
    }
  `}
`;

const Button = ({ linkType = 'internal', url, theme = 'light', children, ...props }) => {
  return (
    <ButtonLink theme={theme} linkType={linkType} url={url} {...props}>
      {children}
    </ButtonLink>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(['dark', 'light']),
};

export { Button };
