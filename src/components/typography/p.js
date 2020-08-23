import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { bodySize } from '../../styles';
import { coreStyles } from './font-styles';

const bodyVariants = variant({
  scale: 'headings',
  variants: {
    Body1: {
      fontSize: [bodySize.L3M2S1, null, bodySize.L2M1Sx, bodySize.L1MxSx],
    },
    Body2: {
      fontSize: [bodySize.LxM3S2, null, bodySize.L3M2S1, bodySize.L2M1Sx],
    },
    Body3: {
      fontSize: [bodySize.LxMxS3, null, bodySize.LxM3S2, bodySize.L3M2S1],
    },
  },
});

const pStyles = css`
  ${coreStyles}
  ${bodyVariants}
`;

const P = styled.p`
  ${pStyles}
`;

const Preheading = styled.p`
  ${pStyles}
  text-transform: uppercase;
`;

export { P, Preheading, pStyles, bodyVariants };
