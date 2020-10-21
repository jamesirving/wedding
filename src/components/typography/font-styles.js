import { css } from 'styled-components';
import { color, space, typography, position } from 'styled-system';

import { fontWeight, globalStyles } from '../../styles';

const coreStyles = css`
  font-family: ${globalStyles.baseFontFamily};
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  line-height: 1.3336;
  margin: 0.5rem 0;
  transform: ${({ brandAngle }) => brandAngle && 'rotate(-3deg)'};

  ${color};
  ${space};
  ${typography};
  ${position};
`;

const headingStyles = css`
  ${coreStyles}
  font-family: ${globalStyles.headingFontFamily};
  letter-spacing: 1px;
  line-height: 1.2;
  margin: 1rem 0;

  ${color};
  ${space};
  ${typography};
  ${position};
`;

export { coreStyles, headingStyles };
