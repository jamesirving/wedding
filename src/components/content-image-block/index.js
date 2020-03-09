import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { H1 } from '../type';
import { Content } from '../Content';
import { Container, Row, Col } from '../grid';
import { space, breakpoints } from '../../styles';
import { getImageUrl } from '../../utils';

const HEIGHT = "400px";

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const ContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;

  @media (min-width: ${breakpoints.lg}) {
    align-items: center;
    text-align: center;
  }
`;

const MediaCol = styled(Col)`
  padding: 0;
  position: relative;

  @media (max-width: ${breakpoints.lg}) {
    height: ${HEIGHT};
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

const ContentImageBlock = ({ image, heading, body, contentPosition }) => {

  // if content is right then image position is left
  const imageOffset = contentPosition === 'right' ? [0] : [0, 0, 0, 1 / 12, 1 / 12];

  return (
    <Wrapper minHeight={HEIGHT}>
      <Row>
      <ContentCol width={{xs: 10 / 12, md: 8 / 12, lg: 4 / 12}} offset={[1/12]} py={{ xs: space.x3, lg: space.x4 }}>
          {heading && (<H1>{heading}</H1>)}
          {body && (<Content>{body}</Content>)}
        </ContentCol>
        <MediaCol width={{xs: 12/12, md: 6/12}} offset={imageOffset}>
          <Image src={getImageUrl(image)} />
        </MediaCol>
      </Row>
    </Wrapper>
  )
}

ContentImageBlock.propTypes = {
  body: PropTypes.string,
  contentPosition: PropTypes.oneOf(['left', 'right']),
  heading: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string,
    objectPosition: PropTypes.string,
    srcset: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};


export { ContentImageBlock };
