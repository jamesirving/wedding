import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { getImageProps } from '../../utils/image';

const StyledImage = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: top;

  ${props =>
    !props.isBackground
      ? null
      : css`
          height: 100%;
          object-fit: cover;
          object-position: ${props.objectPosition};
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        `}
`;

const Image = ({ className, image, src, srcSet, width, height, sizes, alt, objectPosition, isBackground }) => (
  <StyledImage
    alt={alt}
    className={className}
    height={height}
    isBackground={isBackground}
    objectPosition={isBackground ? objectPosition : null}
    sizes={sizes}
    src={src}
    srcSet={srcSet}
    width={width}
    {...getImageProps(image)}
  />
);

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.object,
  isBackground: PropTypes.bool,
  objectPosition: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { Image };
