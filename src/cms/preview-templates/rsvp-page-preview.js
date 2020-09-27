import React from 'react';
import PropTypes from 'prop-types';
import { RsvpPageTemplate } from '../../templates/rsvp-page';

// eslint-disable-next-line no-unused-vars
const RsvpPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <RsvpPageTemplate pageHeaderBlock={data.pageHeaderBlock || {}} />;
  }
  return <div>Loading...</div>;
};

RsvpPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default RsvpPagePreview;
