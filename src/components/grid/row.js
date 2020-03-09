import styled from 'styled-components';

import { Flex } from './flex';
import { grid } from '../../styles';

const Row = styled(Flex)`
  margin-left: -${grid.rowMargin};
  margin-right: -${grid.rowMargin};
`;

export { Row };
