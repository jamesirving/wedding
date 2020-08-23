import styled, { css } from 'styled-components';

import { bodySize, breakpoints } from '../../styles';
import { coreStyles } from './font-styles';

const Body1 = css`
  font-size: ${bodySize.L3M2S1};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${bodySize.L2M1Sx};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${bodySize.L1MxSx};
  }
`;

const Body2 = css`
  font-size: ${bodySize.LxM3S2};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${bodySize.L3M2S1};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${bodySize.L2M1Sx};
  }
`;

const Body3 = css`
  font-size: ${bodySize.LxMxS3};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${bodySize.LxM3S2};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${bodySize.L3M2S1};
  }
`;

const pStyles = css`
  ${coreStyles}
  ${({ variant }) => {
    switch (variant) {
      default:
      case 1:
        return Body1;
      case 2:
        return Body2;
      case 3:
        return Body3;
    }
  }};
`;

const P = styled.p`
  ${pStyles}
`;

const Preheading = styled.p`
  ${pStyles}
  text-transform: uppercase;
`;

export { P, Preheading, pStyles };
