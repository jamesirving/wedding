import React from 'react';
import PropTypes from 'prop-types';
import { DetailsPageTemplate } from '../../templates/details-page';
import { Layout } from '../../components/layout';

// eslint-disable-next-line no-unused-vars
const DetailsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <Layout>
        <DetailsPageTemplate pageHeaderBlock={data.pageHeaderBlock || {}} detailsBlock={data.detailsBlock || {}} />
      </Layout>
    );
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
