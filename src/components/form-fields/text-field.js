import { get } from 'lodash';
import { TextField as MuiTextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';

const TextField = ({
  autoComplete,
  disabled,
  fullWidth,
  label,
  maxLength,
  name,
  onChange,
  placeholder,
  required,
  type,
}) => {
  const { errors, handleBlur, handleChange, setFieldTouched, touched, values, submitCount } = useFormikContext();

  const onFieldChange = newValue => {
    setFieldTouched(name, true);
    onChange(newValue);
    handleChange(name)(newValue);
  };

  const isTouched = get(touched, name);
  const error = get(errors, name);
  const value = get(values, name);

  return (
    <MuiTextField
      aria-label={label}
      autoComplete={autoComplete}
      disabled={disabled}
      error={(submitCount > 0 || !!isTouched) && !!error}
      fullWidth={fullWidth}
      helperText={(submitCount > 0 || !!isTouched) && error}
      id={name}
      label={label}
      maxLength={maxLength}
      name={name}
      onBlur={handleBlur}
      onChange={onFieldChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      variant="filled"
    />
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.oneOf(['email', 'family-name', 'given-name', 'tel', 'no-auto-complete', 'password']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'tel', 'text', 'password']),
};

TextField.defaultProps = {
  autoComplete: 'no-auto-complete',
  disabled: false,
  fullWidth: false,
  label: null,
  maxLength: null,
  onChange: noop,
  placeholder: null,
  required: false,
  type: 'text',
};

export { TextField };
