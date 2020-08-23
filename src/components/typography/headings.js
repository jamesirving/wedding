import styled from 'styled-components';
import { variant } from 'styled-system';

import { headingSize } from '../../styles';
import { headingStyles } from './font-styles';

const headingVariants = variant({
  scale: 'headings',
  variants: {
    h1: {
      fontSize: [headingSize.L3M2S1, null, headingSize.L2M1Sx, headingSize.L1MxSx],
    },
    h2: {
      fontSize: [headingSize.LxM3S2, null, headingSize.L3M2S1, headingSize.L2M1Sx],
    },
    h3: {
      fontSize: [headingSize.LxMxS3, null, headingSize.LxM3S2, headingSize.L3M2S1],
    },
    h3: {
      fontSize: [headingSize.LxMxS3, null, headingSize.LxM3S2, headingSize.L3M2S1],
    },
  },
});

const elementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
};

const Heading = styled.h2.attrs(({ as, variant: headingVariant }) => ({
  as: as || elementMap[headingVariant],
}))`
  ${headingStyles};
  ${headingVariants};
`;

export { Heading, headingVariants };
