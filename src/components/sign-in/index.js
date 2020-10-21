import { Formik, Form } from 'formik';
import { get } from 'lodash';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { colors } from '../../styles';
import { Container, Col, Row } from '../grid';
import { P } from '../typography';
import { validationSchema } from './validation-shcema';
import { TextField } from '../form-fields';
import { getFirebaseAuth } from '../../utils';

const StyledError = styled(P)`
  color: ${colors.red500};
`;

const SignIn = () => {
  const auth = getFirebaseAuth();

  const onSubmit = useCallback(async (values, { setSubmitting, setStatus, setFieldError }) => {
    setSubmitting(true);

    await auth.signInWithEmailAndPassword(values.email, values.password).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('Auth error: ', error);

      if (errorCode === 'auth/wrong-password') {
        setFieldError('password', 'Wrong password.');
      } else {
        setStatus({ error: errorMessage });
      }
    });

    setSubmitting(false);
  });

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit, isSubmitting, status }) => {
        return (
          <Container>
            <Row my={3}>
              <Col width={{ xs: 10 / 12, lg: 8 / 12 }} offset={[1 / 12, 1 / 12, 1 / 12, 2 / 12]}>
                {get(status, 'success') ? (
                  <P>Success! Thankyou for your response.</P>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row flexWrap="wrap">
                      <Col my={1} width={{ xs: 1, lg: 6 / 12 }}>
                        <TextField label="Email" name="email" fullWidth required />
                      </Col>
                      <Col my={1} width={{ xs: 1, lg: 6 / 12 }}>
                        <TextField type="password" label="password" name="password" fullWidth required />
                      </Col>
                    </Row>
                    <Row flexWrap="wrap" my={1}>
                      <Col width={1}>
                        <Button disabled={isSubmitting} onClick={handleSubmit} variant="dark" type="submit">
                          {isSubmitting ? 'Submitting...' : 'Login'}
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
        );
      }}
    </Formik>
  );
};

export { SignIn };
