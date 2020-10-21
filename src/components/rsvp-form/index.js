import { scroller } from 'react-scroll';
import { Formik, Form, FieldArray } from 'formik';
import { get, size } from 'lodash';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { colors } from '../../styles';
import { Container, Col, Row } from '../grid';
import { dietaryRequirements } from '../../constants';
import { Guest } from './guest';
import { P } from '../typography';
import { getFirebaseDB, validateReCaptcha } from '../../utils';
import { validationSchema } from './validation-schema';

const StyledError = styled(P)`
  color: ${colors.red500};
`;

const RsvpForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const database = getFirebaseDB();

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);
    const token = await executeRecaptcha('rsvp');

    const reCaptcha = await validateReCaptcha(token);

    if (!reCaptcha.success) {
      setStatus(reCaptcha);
      setSubmitting(false);
      return;
    }

    await database
      .add({ ...values.guests })
      .then(() => {
        setStatus({ success: true });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Submission Error: ', error);
        setStatus({ success: false, error });
        setSubmitting(false);
      });
  };

  const dietaryDefaults = dietaryRequirements.reduce(
    (accumulator, requirement) => ({
      ...accumulator,
      [requirement.name]: false,
    }),
    {}
  );

  const initialValues = {
    givenName: '',
    familyName: '',
    email: '',
    rsvp: 'yes',
    dietaryRequirements: dietaryDefaults,
  };

  return (
    <Formik initialValues={{ guests: [initialValues] }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit, isSubmitting, values, status }) => {
        const refs = values.guests.reduce((acc, guest, currentIndex) => {
          acc[currentIndex] = React.createRef();
          return acc;
        }, {});
        const success = get(status, 'success');

        return (
          <Container>
            <Row my={3}>
              <Col width={{ xs: 10 / 12, lg: 8 / 12 }} offset={[1 / 12, 1 / 12, 1 / 12, 2 / 12]}>
                {success ? (
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
                                <div
                                  ref={refs[index]}
                                  id={`guest-${index}`}
                                  // eslint-disable-next-line react/no-array-index-key
                                  key={`guest-${index}`}
                                >
                                  <Guest index={index} arrayHelpers={arrayHelpers} />
                                </div>
                              );
                            })}
                          <Row>
                            <Col width={1} mb="3">
                              <Button
                                disabled={size(values.guests) > 4}
                                onClick={() => {
                                  const index = size(values.guests) - 1;
                                  arrayHelpers.push(initialValues);
                                  scroller.scrollTo(`guest-${index}`, {
                                    duration: 800,
                                    offset: refs[index].current.clientHeight,
                                    smooth: true,
                                  });
                                }}
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
                        {console.log('isSubmitting: ', isSubmitting)}
                        <Button disabled={success || isSubmitting} onClick={handleSubmit} variant="dark" type="submit">
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </Col>
                      {get(status, 'error') && (
                        <Col width={1} mb="1">
                          <StyledError>
                            There was an error submitting the form, please try again. If the problem persists please let
                            us know: {status.error}
                          </StyledError>
                        </Col>
                      )}
                    </Row>
                  </Form>
                )}
              </Col>
            </Row>
          </Container>
        );
      }}
    </Formik>
  );
};

export { RsvpForm };
