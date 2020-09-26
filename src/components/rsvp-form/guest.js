import React, { useRef } from 'react';
import styled from 'styled-components';

import { Col, Row } from '../grid';
import { colors } from '../../styles';
import { P } from '../typography';
import { TextField, RadioGroup, CheckboxGroup } from '../form-fields';
import { Button } from '../button';

const StyledRow = styled(Row)`
  position: relative;

  & :hover {
    background-color: light-grey;
  }
`;

const Guest = ({ index, arrayHelpers }) => {
  const colWidth = { xs: 12 / 12, lg: 4 / 12 };

  return (
    <StyledRow flexWrap="wrap" mb={1} boarderRadius="20px" backgroundColor={colors.grey50}>
      <Col width={1} my={1}>
        {index < 1 ? <P> Your details: </P> : <P> Guest {index + 1} details: </P>}
      </Col>
      <Col width={colWidth} mb={1}>
        <TextField label="First Name" name={`guests[${index}].givenName`} fullWidth required />
      </Col>
      <Col width={colWidth} mb={1}>
        <TextField label="Last Name" name={`guests[${index}].familyName`} fullWidth required />
      </Col>
      <Col width={colWidth} display="flex" mb={1}>
        <TextField label="Email" name={`guests[${index}].email`} fullWidth required />
      </Col>
      <Col width={{ xs: 12 / 12, lg: 6 / 12 }} my={1}>
        <RadioGroup
          legend="RSVP"
          ariaLabel="RSVP response"
          name={`guests[${index}].rsvp`}
          options={[
            {
              label: 'Yes, I will be attending',
              optionValue: 'yes',
            },
            {
              label: 'No, unfortunately I am unable to attend',
              optionValue: 'no',
            },
          ]}
        />
      </Col>
      <Col width={{ xs: 12 / 12, lg: 6 / 12 }} my={1}>
        <CheckboxGroup
          legend="Dietary Requirements"
          ariaLabel="Dietary Requirements"
          name={`guests[${index}].dietaryRequirements`}
          options={[
            {
              label: 'Vegan',
              optionName: `guests[${index}].dietaryRequirements.vegan`,
            },
            {
              label: 'Vegetarian',
              optionName: `guests[${index}].dietaryRequirements.vegetarian`,
            },
            {
              label: 'Nut allergy',
              optionName: `guests[${index}].dietaryRequirements.nut`,
            },
            {
              label: 'Gluten intolerance',
              optionName: `guests[${index}].dietaryRequirements.gluten`,
            },
            {
              label: 'No dietary requirements',
              optionName: `guests[${index}].dietaryRequirements.none`,
            },
          ]}
        />
      </Col>

      {index > 0 && (
        <Button
          p={1}
          top="0"
          right="0"
          variant="close"
          position="absolute"
          type="button"
          onClick={() => {
            arrayHelpers.remove(index); // remove a guest from the list
          }}
        >
          X
        </Button>
      )}
    </StyledRow>
  );
};

export { Guest };
