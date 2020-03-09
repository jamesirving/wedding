import { css } from 'styled-components';
import { space, typography } from 'styled-system';

import { colors, fontWeight, globalStyles } from '../../styles';

const coreStyles = css`
  ${space}
  ${typography}
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  line-height: 1.3336;
  margin: 0.5rem 0;
  transform: ${({ brandAngle }) => brandAngle && 'rotate(-3deg)'};
`;

const headingStyles = css`
  ${coreStyles}
  font-family: ${globalStyles.headingFontFamily};
  // font-weight: ${fontWeight.bold};
  letter-spacing: 1px;
  line-height: 1.2;
`;

export { coreStyles, headingStyles };