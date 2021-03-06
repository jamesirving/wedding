import React from 'react';
import { Layout } from '../components/layout';

import { Heading, P } from '../components/typography';
import { Feature } from '../components/feature';

const NotFoundPage = () => (
  <Layout>
    <Feature image={{ src: '/img/compass.jpg' }} objectPosition="0 40%" height="50vh">
      <Heading variant="h1" color="white">
        404 - NOT FOUND
      </Heading>
      <P color="white">You just hit a route that doesn&#39;t exist... the sadness.</P>
    </Feature>
  </Layout>
);

export default NotFoundPage;
