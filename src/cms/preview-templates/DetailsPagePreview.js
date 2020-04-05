import React from 'react';
import PropTypes from 'prop-types';
import { DetailsPageTemplate } from '../../templates/details-page';

// eslint-disable-next-line no-unused-vars
const DetailsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <DetailsPageTemplate pageHeaderBlock={data.pageHeaderBlock || {}} detailsBlock={data.detailsBlock || {}} />;
  }
  return <div>Loading...</div>;
};

DetailsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default DetailsPagePreview;
