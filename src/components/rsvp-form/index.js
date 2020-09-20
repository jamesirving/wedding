import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Button } from '../button';
import { Container, Col, Row } from '../grid';
import { TextField } from '../form-fields';
import { Form } from '../form';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const RsvpForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, setState] = useState({});

  const handleChange = e => {
    setState(oldState => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    if (!executeRecaptcha) {
      return;
    }

    const result = await executeRecaptcha('rsvp');
    setState(oldState => ({
      ...oldState,
      'g-recaptcha-response': result,
    }));

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(setState({ success: true }))
      .catch(error => alert(error));
  };

  return (
    <Container>
      <Row>
        <Col width={{ xs: 10 / 12, lg: 8 / 12 }} offset={[1 / 12, 1 / 12, 1 / 12, 2 / 12]}>
          <Form name="rsvp" method="post" data-netlify="true" data-netlify-recaptcha="true" onSubmit={handleSubmit}>
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>

            <TextField label="First Name" id="firstName" />
            <TextField label="Last Name" id="lastName" />
            <TextField label="Email" id="email" />

            {/* <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="rsvp" name="rsvp" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl> */}

            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export { RsvpForm };
