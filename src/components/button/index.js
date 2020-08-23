import { color, layout, space as styledSpace, variant as styledVariant, typography } from 'styled-system';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space as styledSystemSpace } from 'styled-system';
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

const ButtonLink = styled(Link)`
  ${styledSystemSpace}
  ${buttonVariant};
  ${color};
  ${layout};
  ${styledSpace};
  ${typography};

  border-radius: 5px;
  display: inline-flex;
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  padding: ${space.x1} ${space.x2};
  text-transform: uppercase;
  transition: all ${globalStyles.transitionSpeed} ${globalStyles.easing};
`;

const Button = ({ linkType = 'internal', url, theme = 'light', children, ...props }) => {
  return (
    <ButtonLink variant={theme} linkType={linkType} url={url} {...props}>
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
