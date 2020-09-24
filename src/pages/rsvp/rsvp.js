/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { navigate } from 'gatsby';
import { Layout } from '../../components/layout';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <form data-netlify="true" name="rsvp" method="post">
          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[0].givenName"
            name="guests[0].givenName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[0].familyName"
            name="guests[0].familyName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[0].email"
            name="guests[0].email"
            required=""
            type="text"
            value=""
          />

          {/* <fieldset>
            <legend>RSVP</legend>
            <input name="guests[0].rsvp" type="radio" value="yes" checked="" />
            Yes, I will be attending
            <input name="guests[0].rsvp" type="radio" value="no" />
            No, unfortunately I am unable to attend
          </fieldset>

          <fieldset>
            <legend>Dietary Requirements</legend>
            <input name="guests[0].dietaryRequirements.vegan" type="checkbox" data-indeterminate="false" value="" />
            <input
              name="guests[0].dietaryRequirements.vegetarian"
              type="checkbox"
              data-indeterminate="false"
              value=""
            />
            <input name="guests[0].dietaryRequirements.nut" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[0].dietaryRequirements.gluten" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[0].dietaryRequirements.none" type="checkbox" data-indeterminate="false" value="" />
          </fieldset>

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[1].givenName"
            name="guests[1].givenName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[1].familyName"
            name="guests[1].familyName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[1].email"
            name="guests[1].email"
            required=""
            type="text"
            value=""
          />

          <fieldset>
            <legend>RSVP</legend>
            <input name="guests[1].rsvp" type="radio" value="yes" checked="" />
            Yes, I will be attending
            <input name="guests[1].rsvp" type="radio" value="no" />
            No, unfortunately I am unable to attend
          </fieldset>

          <fieldset>
            <legend>Dietary Requirements</legend>
            <input name="guests[1].dietaryRequirements.vegan" type="checkbox" data-indeterminate="false" value="" />
            <input
              name="guests[1].dietaryRequirements.vegetarian"
              type="checkbox"
              data-indeterminate="false"
              value=""
            />
            <input name="guests[1].dietaryRequirements.nut" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[1].dietaryRequirements.gluten" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[1].dietaryRequirements.none" type="checkbox" data-indeterminate="false" value="" />
          </fieldset>

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[2].givenName"
            name="guests[2].givenName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[2].familyName"
            name="guests[2].familyName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[2].email"
            name="guests[2].email"
            required=""
            type="text"
            value=""
          />

          <fieldset>
            <legend>RSVP</legend>
            <input name="guests[2].rsvp" type="radio" value="yes" checked="" />
            Yes, I will be attending
            <input name="guests[2].rsvp" type="radio" value="no" />
            No, unfortunately I am unable to attend
          </fieldset>

          <fieldset>
            <legend>Dietary Requirements</legend>
            <input name="guests[2].dietaryRequirements.vegan" type="checkbox" data-indeterminate="false" value="" />
            <input
              name="guests[2].dietaryRequirements.vegetarian"
              type="checkbox"
              data-indeterminate="false"
              value=""
            />
            <input name="guests[2].dietaryRequirements.nut" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[2].dietaryRequirements.gluten" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[2].dietaryRequirements.none" type="checkbox" data-indeterminate="false" value="" />
          </fieldset>

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[3].givenName"
            name="guests[3].givenName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[3].familyName"
            name="guests[3].familyName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[3].email"
            name="guests[3].email"
            required=""
            type="text"
            value=""
          />

          <fieldset>
            <legend>RSVP</legend>
            <input name="guests[3].rsvp" type="radio" value="yes" checked="" />
            Yes, I will be attending
            <input name="guests[3].rsvp" type="radio" value="no" />
            No, unfortunately I am unable to attend
          </fieldset>

          <fieldset>
            <legend>Dietary Requirements</legend>
            <input name="guests[3].dietaryRequirements.vegan" type="checkbox" data-indeterminate="false" value="" />
            <input
              name="guests[3].dietaryRequirements.vegetarian"
              type="checkbox"
              data-indeterminate="false"
              value=""
            />
            <input name="guests[3].dietaryRequirements.nut" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[3].dietaryRequirements.gluten" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[3].dietaryRequirements.none" type="checkbox" data-indeterminate="false" value="" />
          </fieldset>

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[4].givenName"
            name="guests[4].givenName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[4].familyName"
            name="guests[4].familyName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[4].email"
            name="guests[4].email"
            required=""
            type="text"
            value=""
          />

          <fieldset>
            <legend>RSVP</legend>
            <input name="guests[4].rsvp" type="radio" value="yes" checked="" />
            Yes, I will be attending
            <input name="guests[4].rsvp" type="radio" value="no" />
            No, unfortunately I am unable to attend
          </fieldset>

          <fieldset>
            <legend>Dietary Requirements</legend>
            <input name="guests[4].dietaryRequirements.vegan" type="checkbox" data-indeterminate="false" value="" />
            <input
              name="guests[4].dietaryRequirements.vegetarian"
              type="checkbox"
              data-indeterminate="false"
              value=""
            />
            <input name="guests[4].dietaryRequirements.nut" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[4].dietaryRequirements.gluten" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[4].dietaryRequirements.none" type="checkbox" data-indeterminate="false" value="" />
          </fieldset>

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[4].givenName"
            name="guests[4].givenName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[4].familyName"
            name="guests[4].familyName"
            required=""
            type="text"
            value=""
          />

          <input
            aria-invalid="false"
            autoComplete="no-auto-complete"
            id="guests[4].email"
            name="guests[4].email"
            required=""
            type="text"
            value=""
          />

          <fieldset>
            <legend>RSVP</legend>
            <input name="guests[4].rsvp" type="radio" value="yes" checked="" />
            Yes, I will be attending
            <input name="guests[4].rsvp" type="radio" value="no" />
            No, unfortunately I am unable to attend
          </fieldset>

          <fieldset>
            <legend>Dietary Requirements</legend>
            <input name="guests[4].dietaryRequirements.vegan" type="checkbox" data-indeterminate="false" value="" />
            <input
              name="guests[4].dietaryRequirements.vegetarian"
              type="checkbox"
              data-indeterminate="false"
              value=""
            />
            <input name="guests[4].dietaryRequirements.nut" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[4].dietaryRequirements.gluten" type="checkbox" data-indeterminate="false" value="" />
            <input name="guests[4].dietaryRequirements.none" type="checkbox" data-indeterminate="false" value="" />
          </fieldset> */}
        </form>
      </Layout>
    );
  }
}
