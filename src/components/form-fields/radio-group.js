import { get } from 'lodash';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

const RadioGroup = ({ legend, ariaLabel, name, options }) => {
  const { errors, handleChange, values } = useFormikContext();

  const error = get(errors, name);
  const value = get(values, name);

  return (
    <FormControl component="fieldset" error={!!error} required>
      <FormLabel component="legend">{legend}</FormLabel>
      <MuiRadioGroup aria-label={ariaLabel} name={name} value={value} onChange={handleChange}>
        {options.map(({ label, optionValue }) => (
          <FormControlLabel key={optionValue} value={optionValue} control={<Radio />} label={label} />
        ))}
      </MuiRadioGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export { RadioGroup };
