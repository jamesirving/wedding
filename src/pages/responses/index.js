import React from 'react';

import { Layout } from '../../components/layout';
import { RsvpTable } from '../../components/rsvp-table';

const ResponsesPage = () => {
  return (
    <Layout>
      <RsvpTable guests={[]} />
    </Layout>
  );
};

export default ResponsesPage;
