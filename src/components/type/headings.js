import styled from 'styled-components';

import { breakpoints, headingSize } from '../../styles';
import { headingStyles } from './font-styles';

const H1 = styled.h1`
  ${headingStyles}
  font-size: ${headingSize.L3M2S1};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${headingSize.L2M1Sx};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${headingSize.L1MxSx};
  }
`;

const H2 = styled.h2`
  ${headingStyles}
  font-size: ${headingSize.LxM3S2};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${headingSize.L3M2S1};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${headingSize.L2M1Sx};
  }
`;

const H3 = styled.h3`
  ${headingStyles}
  font-size: ${headingSize.LxMxS3};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${headingSize.LxM3S2};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${headingSize.L3M2S1};
  }
`;

export { H1, H2, H3 };