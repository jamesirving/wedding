import { Formik, Form, FieldArray } from 'formik';
import { get, size } from 'lodash';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { colors } from '../../styles';
import { Container, Col, Row } from '../grid';
import { Guest } from './guest';
import { P } from '../typography';
import { validationSchema } from './validation-shema';
import { rsvpSubmission } from '../../utils';

const StyledError = styled(P)`
  color: ${colors.red500};
`;

const RsvpForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = useCallback(
    async (values, { setSubmitting, setStatus }) => {
      const token = await executeRecaptcha('rsvp');
      rsvpSubmission({ token, values, setSubmitting, setStatus });
    },
    [executeRecaptcha]
  );

  return (
    <Formik
      initialValues={{
        guests: [
          {
            givenName: '',
            familyName: '',
            email: '',
            rsvp: 'yes',
            dietaryRequirements: { vegan: false, vegetarian: false, nut: false, gluten: false, none: false },
          },
        ],
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isSubmitting, values, status }) => (
        <Container>
          <Row my={3}>
            <Col width={{ xs: 10 / 12, lg: 8 / 12 }} offset={[1 / 12, 1 / 12, 1 / 12, 2 / 12]}>
              {get(status, 'success') ? (
                <P>Success! Thankyou for your response.</P>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <FieldArray
                    name="guests"
                    render={arrayHelpers => (
                      <>
                        {values.guests &&
                          values.guests.map((guest, index) => {
                            return (
                              // eslint-disable-next-line react/no-array-index-key
                              <Guest key={`guest-${index}`} index={index} arrayHelpers={arrayHelpers} />
                            );
                          })}
                        <Row>
                          <Col width={1} mb="3">
                            <Button
                              disabled={size(values.guests) > 4}
                              onClick={() =>
                                arrayHelpers.push({
                                  givenName: '',
                                  familyName: '',
                                  email: '',
                                  rsvp: 'yes',
                                  dietaryRequirements: {
                                    vegan: false,
                                    vegetarian: false,
                                    nut: false,
                                    gluten: false,
                                    none: false,
                                  },
                                })
                              }
                              variant="light"
                              type="button"
                            >
                              Add Guest
                            </Button>
                          </Col>
                        </Row>
                      </>
                    )}
                  />
                  <Row flexWrap="wrap" mb={1}>
                    <Col width={1} mb="1">
                      <Button
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        onClick={handleSubmit}
                        variant="dark"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Col>
                    {get(status, 'error') && (
                      <Col width={1} mb="1">
                        <StyledError>{status.error}</StyledError>
                      </Col>
                    )}
                  </Row>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export { RsvpForm };
