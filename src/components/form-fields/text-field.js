import { TextField as MuiTextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';

const TextField = ({ disabled, maxLength, required, onChange, placeholder, autoComplete, label, name, type }) => {
  const { errors, handleBlur, handleChange, setFieldTouched, touched, values } = useFormikContext();

  const onFieldChange = value => {
    setFieldTouched(name, true);
    onChange(value);
    handleChange(name)(value);
  };

  return (
    <MuiTextField
      autoComplete={autoComplete}
      disabled={disabled}
      errorMessage={touched[name] && errors[name]}
      isError={!!touched[name] && !!errors[name]}
      label={label}
      maxLength={maxLength}
      name={name}
      onBlur={handleBlur}
      onChange={onFieldChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={values[name]}
      variant="filled"
    />
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.oneOf(['email', 'family-name', 'given-name', 'tel', 'off']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'tel', 'text']),
};

TextField.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  label: null,
  maxLength: null,
  onChange: noop,
  placeholder: null,
  required: true,
  type: 'text',
};

export { TextField };
