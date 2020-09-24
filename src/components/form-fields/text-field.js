import { TextField as MuiTextField } from '@material-ui/core';
import { get } from 'lodash';
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
      helperText={(submitCount > 0 || !!isTouched) && error}
      id={name}
      error={(submitCount > 0 || !!isTouched) && !!error}
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
      fullWidth={fullWidth}
    />
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.oneOf(['email', 'family-name', 'given-name', 'tel', 'no-auto-complete']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'tel', 'text']),
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
