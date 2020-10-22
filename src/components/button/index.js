import {
  border,
  color,
  flexbox,
  layout,
  position,
  space as styledSpace,
  typography,
  variant as styledVariant,
} from 'styled-system';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { Box, Flex } from '../grid';
import { Link } from '../link';
import { space, colors, globalStyles, fontWeight } from '../../styles';

const buttonVariant = styledVariant({
  scale: 'buttons',
  variants: {
    light: {
      backgroundColor: colors.white,
      border: `2px solid ${colors.black}`,
      color: colors.black,

      '&:hover': {
        backgroundColor: colors.black,
        borderColor: colors.black,
        color: colors.white,
      },

      '&:disabled': {
        backgroundColor: colors.grey100,
        borderColor: colors.grey100,
        color: colors.grey600,
        cursor: 'not-allowed',
      },
    },
    dark: {
      backgroundColor: colors.black,
      border: `2px solid ${colors.black}`,
      color: colors.white,

      '&:hover': {
        backgroundColor: colors.white,
        color: colors.black,
      },

      '&:disabled': {
        backgroundColor: colors.grey100,
        borderColor: colors.grey100,
        color: colors.grey600,
        cursor: 'not-allowed',
      },
    },
    close: {
      backgroundColor: 'transparent',
      border: `2px solid transparent`,
      color: colors.grey600,

      '&:hover': {
        color: colors.black,
      },

      '&:disabled': {
        backgroundColor: colors.grey100,
        borderColor: colors.grey100,
        color: colors.grey600,
        cursor: 'not-allowed',
      },
    },
  },
});

const buttonStyles = css`
  border-radius: 5px;
  display: inline-flex;
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.bold};
  padding: ${space.x1} ${space.x2};
  text-transform: uppercase;
  transition: all ${globalStyles.transitionSpeed} ${globalStyles.easing};

  ${buttonVariant}

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${styledSpace}
  ${typography}
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const Content = ({ children, isLoading }) => {
  return !isLoading ? (
    children
  ) : (
    <Flex alignItems="center">
      <Box mr={1}>Loading</Box>
      <CircularProgress color="black" size={18} />
    </Flex>
  );
};

const Button = ({
  children,
  isLoading = false,
  linkType = 'internal',
  theme = 'light',
  type = 'link',
  url,
  ...rest
}) => {
  if (type === 'link') {
    return (
      <StyledLink variant={theme} linkType={linkType} url={url} {...rest}>
        <Content isLoading={isLoading}>{children}</Content>
      </StyledLink>
    );
  }

  return (
    <StyledButton variant={theme} type={type} {...rest}>
      <Content isLoading={isLoading}>{children}</Content>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  linkType: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['submit', 'button', 'link']),
  url: PropTypes.string,
};

export { Button };
