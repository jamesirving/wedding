import React from 'react';
import styled from 'styled-components';
import { TableCell, TableHead as MuiTableHead, TableRow, TableSortLabel } from '@material-ui/core';

const headCells = [
  { id: 'givenName', label: 'First Name' },
  { id: 'familyName', label: 'Last Name' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'email', label: 'Email' },
  { id: 'dietaryRequirements', label: 'Dietary Requirements' },
];

const TableHead = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <StyledSpan>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</StyledSpan>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

const StyledSpan = styled.span`
  visibility: hidden;
  width: 0;
`;

export { TableHead };
