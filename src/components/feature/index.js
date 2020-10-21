import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors, space } from '../../styles';
import { Container, Col, Row, Flex } from '../grid';
import { Image } from '../image';

const Wrapper = styled(Flex)`
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

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${space.x4};
  margin-top: ${space.x3};
  position: relative;
  z-index: 1;
`;

const Feature = ({ image, objectPosition, height, children }) => {
  return (
    <Wrapper minHeight={height}>
      <Image image={image} objectPosition={objectPosition} height={height} isBackground />
      <StyledContainer>
        <Row>
          <Col width={{ xs: 10 / 12, md: 8 / 12, lg: 6 / 12 }} offset={[1 / 12, 1 / 12, 2 / 12, 3 / 12]}>
            {children}
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

Feature.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.object,
  objectPosition: PropTypes.string,
};

export { Feature };
