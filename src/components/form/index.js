import { Formik, Form as FormikForm } from 'formik';
import { size } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { Col } from '../grid';
import { P } from '../typography';

const StyledError = styled(P)`
  text-align: center;
  color: ${({ theme }) => theme.colors.brandError};
`;

const Form = ({ buttonText, children, disabled, error, initialValues, onSubmit, submitted, validationSchema }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ dirty, errors, handleSubmit, isSubmitting }) => (
      <FormikForm>
        {children}
        {error && (
          <Col mb="1">
            <StyledError>{error}</StyledError>
          </Col>
        )}
        <Button
          disabled={disabled || size(errors) > 0 || isSubmitting || !dirty || submitted}
          isLoading={isSubmitting || undefined}
          onClick={handleSubmit}
          type="submit"
        >
          {buttonText}
        </Button>
      </FormikForm>
    )}
  </Formik>
);

Form.propTypes = {
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  initialValues: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitted: PropTypes.bool,
  validationSchema: PropTypes.shape({}).isRequired,
};

Form.defaultProps = {
  disabled: false,
  error: null,
  submitted: false,
};

export { Form };
