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
  border-radius: 5px;
  position: relative;
  margin: 0 -0.5rem 1rem -0.5rem;
  padding: 0 0.5rem 0 0.5rem;

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
            ariaLabel="RSVP response"
            legend="RSVP"
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
            ariaLabel="Dietary Requirements"
            legend="Dietary Requirements"
            name={`guests[${index}].dietaryRequirements`}
            options={dietaryRequirements.map(requirement => ({
              label: requirement.label,
              optionName: `guests[${index}].dietaryRequirements.${requirement.name}`,
            }))}
          />
        </Col>

        {index > 0 && (
          <Button
            onClick={() => {
              arrayHelpers.remove(index); // remove a guest from the list
            }}
            p={1}
            position="absolute"
            right="0"
            top="0"
            type="button"
            variant="close"
          >
            X
          </Button>
        )}
      </Row>
    </GuestWrapper>
  );
};

export { Guest };
