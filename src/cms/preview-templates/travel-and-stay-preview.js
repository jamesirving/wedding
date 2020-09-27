import React from 'react';
import PropTypes from 'prop-types';
import { TravelAndStayPageTemplate } from '../../templates/travel-and-stay-page';
import { Layout } from '../../components/layout';

// eslint-disable-next-line no-unused-vars
const TravelAndStayPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <Layout>
        <TravelAndStayPageTemplate
          pageHeaderBlock={data.pageHeaderBlock || {}}
          detailsBlock={data.detailsBlock || {}}
        />
      </Layout>
    );
  }
  return <div>Loading...</div>;
};

TravelAndStayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default TravelAndStayPagePreview;
