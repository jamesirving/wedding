import { css } from 'styled-components';
import { color, space, typography } from 'styled-system';

import { fontWeight, globalStyles } from '../../styles';

const coreStyles = css`
  ${color};
  ${space};
  ${typography};
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
  letter-spacing: 1px;
  line-height: 1.2;
`;

export { coreStyles, headingStyles };
