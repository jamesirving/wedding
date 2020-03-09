import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Col, Row, Flex } from '../grid'
import {H1, P} from '../type'
import { colors, space } from '../../styles'
import { getImageUrl } from '../../utils'

const Wrapper = styled(Flex)`
  min-height: ${props => props.minHeight};
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;

  &::after {
    background-color: ${colors.black};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const BackgroundImage = styled.img`
  height: 100%;
  left: 0;
  max-width: 100%;
  object-fit: cover;
  object-position: ${props => props.objectPosition};
  position: absolute;
  top: 0;
  vertical-align: top;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${space.x4};
  margin-top: ${space.x3};
  position: relative;
  z-index: 1;
`;


const Feature = ({image, objectPosition, height, children }) => {
  return (
    <Wrapper minHeight={height}>
      <BackgroundImage  src={getImageUrl(image)} objectPosition={objectPosition} />
      <StyledContainer>
        <Row>
          <Col width={{xs: 10/12, md: 8/12, lg: 6/12}} offset={[1/12, 1/12, 2/12, 3/12]}>
            {children && (children)}
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

Feature.propTypes = {
  image: PropTypes.object,
  objectPosition: PropTypes.string,
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

export {Feature};