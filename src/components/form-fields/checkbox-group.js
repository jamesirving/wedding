import { get } from 'lodash';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

const CheckboxGroup = ({ legend, ariaLabel, name, options }) => {
  const [isTouched, setIsTouched] = React.useState(false);
  const { errors, handleChange, values } = useFormikContext();

  const error = get(errors, `${name}.oneOf`);

  const onChange = event => {
    setIsTouched(true);
    handleChange(event);
  };

  return (
    <FormControl required error={isTouched && !!error} component="fieldset">
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup aria-label={ariaLabel} name={name}>
        {options.map(({ label, optionName }) => {
          const value = get(values, optionName);

          return (
            <FormControlLabel
              key={optionName}
              control={<Checkbox checked={value} onChange={onChange} name={optionName} />}
              label={label}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>{isTouched && error}</FormHelperText>
    </FormControl>
  );
};

export { CheckboxGroup };
