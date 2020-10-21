import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import { get } from 'lodash';
import { useFormikContext } from 'formik';
import React from 'react';

const CheckboxGroup = ({ legend, ariaLabel, name, options }) => {
  const { errors, handleChange, submitCount, values } = useFormikContext();
  const [isTouched, setIsTouched] = React.useState(false);

  const onChange = e => {
    setIsTouched(true);
    handleChange(e);
  };

  const error = (isTouched || submitCount > 0) && (get(errors, `${name}.oneOf`) || get(errors, `${name}.notBoth`));

  return (
    <FormControl required error={!!error} component="fieldset">
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
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export { CheckboxGroup };
