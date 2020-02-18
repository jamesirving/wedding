import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Box } from './box';
import { breakpoints, grid } from '../../styles';

const StyledCol = styled(Box)`
  margin-left: ${props => (props.offset ? props.offset[0] : 0)};
  padding-left: ${grid.gutterHalf};
  padding-right: ${grid.gutterHalf};
  @media (min-width: ${breakpoints.sm}) {
    margin-left: ${props => props.offset[1]};
  }
  @media (min-width: ${breakpoints.md}) {
    margin-left: ${props => props.offset[2]};
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-left: ${props => props.offset[3]};
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-left: ${props => props.offset[4]};
  }
`;

const toPercent = value => `${value * 100}%`;

const Col = ({ className, offset, ...rest }) => (
  <StyledCol {...rest} className={className} offset={offset ? offset.map(toPercent) : []} />
);

Col.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.arrayOf(PropTypes.number),
};

Col.defaultProps = {
  className: null,
  offset: null,
};

export { Col };