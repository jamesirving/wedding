import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { map } from 'lodash';

import { Container, Row, Col } from '../grid';
import { H2 } from '../type';

const Details = ({ details }) => (
  <Container>
    {map(details, ({ heading, detail }) => (
      <Row>
        <Col>
          <H2>{heading}</H2>
        </Col>
        <Col>
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
