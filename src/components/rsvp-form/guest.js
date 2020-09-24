import React from 'react';
import styled from 'styled-components';
import { color, layout, space as styledSpace, typography } from 'styled-system';

import { Col, Row } from '../grid';
import { P } from '../typography';
import { TextField, RadioGroup, CheckboxGroup } from '../form-fields';

const CloseButton = styled.button`
  ${styledSpace}
  ${color};
  ${layout};
  ${typography};
`;

const StyledRow = styled(Row)`
  & :hover {
    background-color: light-grey;
  }
`;

const Guest = ({ index, arrayHelpers }) => {
  return (
    <StyledRow flexWrap="wrap" mb={1}>
      <Col width={1}>{index < 1 ? <P> Your details: </P> : <P> Guest {index + 1} details: </P>}</Col>
      <Col width={{ xs: 12 / 12, lg: 4 / 12 }}>
        <TextField label="First Name" name={`guests[${index}].givenName`} fullWidth required />
      </Col>
      <Col width={{ xs: 12 / 12, lg: 4 / 12 }} mb={1}>
        <TextField label="Last Name" name={`guests[${index}].familyName`} fullWidth required />
      </Col>
      <Col width={{ xs: 12 / 12, lg: 4 / 12 }} display="flex" mb={2}>
        <TextField label="Email" name={`guests[${index}].email`} fullWidth required />
        {index > 0 && (
          <CloseButton
            p={1}
            type="button"
            onClick={() => {
              arrayHelpers.remove(index); // remove a friend from the list
            }}
          >
            X
          </CloseButton>
        )}
      </Col>
      <Col width={{ xs: 12 / 12, lg: 6 / 12 }}>
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
      <Col width={{ xs: 12 / 12, lg: 6 / 12 }}>
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
    </StyledRow>
  );
};

export { Guest };
