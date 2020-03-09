import { flexbox } from 'styled-system';
import styled from 'styled-components';

import { Box } from './box';

const Flex = styled(Box)`
  ${flexbox}

  display: flex;
`;

export { Flex };
