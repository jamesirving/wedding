import { size, map, reduce } from 'lodash';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { Container, Col, Row } from '../grid';
import { getFirebaseDB } from '../../utils';
import { getComparator, stableSort } from './table-sort';
import { P } from '../typography';
import { TableHead } from './table-head';
import { colors } from '../../styles';

const formatGuest = guest => {
  const dietaryRequirements = reduce(
    guest.dietaryRequirements,
    (acc, req, key) => {
      if (req) {
        // eslint-disable-next-line no-param-reassign
        (acc || (acc = [])).push(key);
      }
      return acc;
    },
    []
  ).join(', ');
  return {
    ...guest,
    dietaryRequirements,
  };
};

const StyledRow = styled(TableRow)`
  &:nth-child(odd) {
    background-color: ${colors.grey100};
  }
`;

const RsvpTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const database = getFirebaseDB();

  const hasData = !!size(documents);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const loadSubmissions = () => {
    setIsLoading(true);
    setDocuments([]);
    database
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const submission = doc.data();
          map(submission, guest =>
            setDocuments(docs => {
              const formattedGuest = formatGuest(guest);
              return [...docs, formattedGuest];
            })
          );
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
        setIsLoading(false);
      });
  };

  const buttonText = hasData ? 'Re-Load Submissions' : 'Load Submissions';

  return (
    <Container mb={3}>
      <Row>
        <Col width={{ xs: 12 / 12 }}>
          <Button
            fontSize={12}
            mb={3}
            type="button"
            onClick={loadSubmissions}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {buttonText}
          </Button>
          {hasData && (
            <>
              <TableContainer>
                <Table aria-label="Submissions Table" size="small">
                  <TableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />

                  <TableBody>
                    {stableSort(documents, getComparator(order, orderBy)).map((row, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <StyledRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.givenName}
                        </TableCell>
                        <TableCell align="right">{row.familyName}</TableCell>
                        <TableCell align="right">{row.rsvp}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.dietaryRequirements}</TableCell>
                      </StyledRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <P my={1}>Total responses: {size(documents)}</P>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export { RsvpTable };
