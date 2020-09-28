import { color, layout, space as styledSystemSpace } from 'styled-system';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { breakpoints, grid, space } from '../../styles';

const StyledContainer = styled.div`
  ${styledSystemSpace}
  ${layout}
  ${color}

  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right:  1.5rem;
  width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    padding-left: ${space.x2};
    padding-right: ${space.x2};
  }
`;

const Container = ({ className, maxWidth, children, ...rest }) => (
  <StyledContainer className={className} maxWidth={maxWidth} {...rest}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  className: PropTypes.string,
  maxWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
  maxWidth: grid.containerMaxWidth,
};

export { Container };
