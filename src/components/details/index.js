import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { map } from 'lodash';

import { Container, Row, Col } from '../grid';
import { Heading } from '../typography';

const Details = ({ details }) => (
  <Container my="4rem">
    {map(details, ({ heading, detail }) => (
      <Row my="2rem">
        <Col width={{ xs: 12 / 12, md: 10 / 12, lg: 8 / 12 }} offset={[0, 0, 1 / 12, 1 / 12]}>
          <Heading variant="h3">{heading}</Heading>
          <ReactMarkdown source={detail} />
        </Col>
      </Row>
    ))}
  </Container>
);

Details.propTypes = {
  details: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
  }).isRequired,
};

export { Details };
