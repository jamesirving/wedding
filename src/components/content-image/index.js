import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { Container, Row, Col } from '../grid';
import { space, breakpoints, colors } from '../../styles';
import { Image } from '../image';

const ContentCol = styled(Col)``;

const MediaCol = styled(Col)`
  position: relative;

  @media (max-width: ${breakpoints.lg}) {
    order: 1;
  }
`;

const Wrapper = styled(Container)`
  overflow: hidden;

  ${props =>
    props.contentPosition === 'right' &&
    css`
      @media (min-width: ${breakpoints.lg}) {
        ${MediaCol} {
          order: -1;
        }
      }
    `};
`;

const ContentImage = ({ image, children, contentPosition, height }) => {
  // if content is right then image position is left
  const imageOffset = contentPosition === 'right' ? [0] : [0, 0, 0, 1 / 12, 1 / 12];

  return (
    <Wrapper my="2rem" minHeight={height} contentPosition={contentPosition}>
      <Row mx={{ xs: '2rem', xl: 0 }} flexWrap={{ xs: 'wrap', lg: 'nowrap' }} backgroundColor={colors.grey50}>
        <ContentCol
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={[1 / 12, 1 / 12, 2 / 12, 1 / 12]}
          py={{ xs: space.x3, lg: space.x4 }}
          width={{ xs: 10 / 12, md: 8 / 12, lg: 4 / 12 }}
        >
          {children}
        </ContentCol>
        <MediaCol offset={imageOffset} width={{ xs: 12 / 12, lg: 6 / 12 }} height={height} p={0}>
          <Image image={image} objectPosition={image.objectPosition} isBackground minHeight={height} />
        </MediaCol>
      </Row>
    </Wrapper>
  );
};

ContentImage.propTypes = {
  children: PropTypes.node,
  contentPosition: PropTypes.oneOf(['left', 'right']),
  image: PropTypes.object,
  height: PropTypes.string,
};

export { ContentImage };
