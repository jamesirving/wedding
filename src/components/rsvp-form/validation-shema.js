import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  guests: Yup.array().of(
    Yup.object().shape({
      givenName: Yup.string().required('First name is required'),
      familyName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Please provide a valid email address')
        .required('Email is required'),
      mobile: Yup.string().matches(
        /^(\+61|0)4[0-9]{8}$/,
        'Please provide a valid Australian mobile number (04/+614[8 digits] format)'
      ),
      rsvp: Yup.string().required('Response required'),
      dietaryRequirements: Yup.object().shape({
        oneOf: Yup.bool().when(['vegan', 'vegetarian', 'nut', 'gluten', 'none'], {
          is: (vegan, vegetarian, nut, gluten, none) => !vegan && !vegetarian && !nut && !gluten && !none,
          then: Yup.bool().required('Response required'),
          otherwise: Yup.bool(),
        }),
        notBoth: Yup.bool().when(['vegan', 'vegetarian', 'nut', 'gluten', 'none'], {
          is: (vegan, vegetarian, nut, gluten, none) => (vegan || vegetarian || nut || gluten) && none,
          then: Yup.bool().required('Must have a dietary requirement or no dietary requirement, not both'),
          otherwise: Yup.bool(),
        }),
      }),
    })
  ),
});

export { validationSchema };
