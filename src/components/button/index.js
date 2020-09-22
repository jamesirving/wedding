import { color, layout, space as styledSpace, variant as styledVariant, typography } from 'styled-system';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from '../link';
import { space, colors, globalStyles, fontWeight } from '../../styles';

const buttonVariant = styledVariant({
  scale: 'buttons',
  variants: {
    light: {
      backgroundColor: colors.white,
      border: `2px solid ${colors.white}`,
      color: 'black',

      '&:hover': {
        borderColor: colors.black,
        color: colors.white,
        backgroundColor: colors.black,
      },
    },
    dark: {
      backgroundColor: colors.black,
      borderColor: colors.black,
      color: 'white',

      '&:hover': {
        borderColor: colors.white,
      },
    },
  },
});

const buttonStyles = css`
  ${styledSpace}
  ${buttonVariant};
  ${color};
  ${layout};
  ${typography};

  border-radius: 5px;
  display: inline-flex;
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  padding: ${space.x1} ${space.x2};
  text-transform: uppercase;
  transition: all ${globalStyles.transitionSpeed} ${globalStyles.easing};
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const Button = ({ linkType = 'internal', children, theme = 'light', type = 'link', url, ...props }) => {
  if (type === 'link') {
    return (
      <StyledLink variant={theme} linkType={linkType} url={url} {...props}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton variant={theme} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  linkType: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['submit', 'button', 'link']),
  url: PropTypes.string,
};

export { Button };
