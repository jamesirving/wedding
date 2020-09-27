import React from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { Col, Row } from '../grid';
import { colors } from '../../styles';
import { dietaryRequirements } from '../../constants';
import { P } from '../typography';
import { TextField, RadioGroup, CheckboxGroup } from '../form-fields';

const GuestWrapper = styled.div`
  border: 2px solid transparent;
  border-radius: 20px;
  position: relative;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${colors.grey50};
  }
`;

const Guest = ({ index, arrayHelpers }) => {
  const colWidth = { xs: 12 / 12, lg: 4 / 12 };

  return (
    <GuestWrapper>
      <Row my={1}>
        <Col width={1}>{index < 1 ? <P> Your details: </P> : <P> Guest {index + 1} details: </P>}</Col>
      </Row>
      <Row flexWrap="wrap" mb={1}>
        <Col width={colWidth} mb={1}>
          <TextField label="First Name" name={`guests[${index}].givenName`} fullWidth required />
        </Col>
        <Col width={colWidth} mb={1}>
          <TextField label="Last Name" name={`guests[${index}].familyName`} fullWidth required />
        </Col>
        <Col width={colWidth} display="flex" mb={1}>
          <TextField label="Email" name={`guests[${index}].email`} fullWidth required />
        </Col>
      </Row>
      <Row flexWrap="wrap" my={1}>
        <Col width={{ xs: 12 / 12, lg: 6 / 12 }} mb={1}>
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
            options={dietaryRequirements.map(requirement => ({
              label: requirement.label,
              optionName: `guests[${index}].dietaryRequirements.${requirement.name}`,
            }))}
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
      </Row>
    </GuestWrapper>
  );
};

export { Guest };
