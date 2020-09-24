import { Formik, Form, FieldArray } from 'formik';
import { get, size } from 'lodash';
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { colors } from '../../styles';
import { Container, Col, Row } from '../grid';
import { Guest } from './guest';
import { P } from '../typography';
import { validationSchema } from './validation-shema';

const StyledError = styled(P)`
  text-align: center;
  color: ${colors.red500};
`;

function encode(data, parent) {
  return Object.keys(data)
    .map(key => {
      const keyReference = parent ? `${parent}[${key}]` : key;
      return typeof data[key] === 'object'
        ? encode(data[key], keyReference)
        : `${encodeURIComponent(keyReference)}=${encodeURIComponent(data[key])}`;
    })
    .join('&');
}

const RsvpForm = () => {
  const onSubmit = useCallback(async (values, { setSubmitting, setFieldError }) => {
    console.log(
      encode({
        'form-name': 'rsvp',
        ...values,
      })
    );

    try {
      fetch('https://james-and-dina.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'rsvp',
          ...values,
        }),
      });
      setFieldError('success', true);
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      setFieldError(
        'general',
        'There was an error submitting the form, please try again. If the problem persists please let us know'
      );
      console.log('submition error: ', error);
    }
  });

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
      // validationSchema={validationSchema}
    >
      {({ errors, handleSubmit, isSubmitting, values }) => (
        <Container>
          <Row my={3}>
            <Col width={{ xs: 10 / 12, lg: 8 / 12 }} offset={[1 / 12, 1 / 12, 1 / 12, 2 / 12]}>
              {get(errors, 'success') ? (
                <P>Success! Thankyou for your response.</P>
              ) : (
                <Form>
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
                          <Col width={1} mb="1">
                            <Button
                              disabled={size(values.guests) > 4}
                              onClick={() => arrayHelpers.push({ givenName: '', familyName: '', email: '' })}
                              variant="dark"
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
                    {get(errors, 'general') && (
                      <Col width={1} mb="1">
                        <StyledError>{errors.general}</StyledError>
                      </Col>
                    )}

                    <Col width={1} mb="1">
                      <Button
                        disabled={size(errors) > 0 || isSubmitting}
                        isLoading={isSubmitting}
                        onClick={handleSubmit}
                        variant="dark"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Col>
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
