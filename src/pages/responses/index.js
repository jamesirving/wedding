import { get } from 'lodash';
import React, { useContext, useState } from 'react';

import { Button } from '../../components/button';
import { Container, Col, Row } from '../../components/grid';
import { getFirebaseAuth } from '../../utils';
import { Layout } from '../../components/layout';
import { RsvpTable } from '../../components/rsvp-table';
import { SignIn } from '../../components/sign-in';
import { UserContext } from '../../providers/user-provider';

const ResponsesPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const user = useContext(UserContext);
  const auth = getFirebaseAuth();

  const handleSignOut = () => {
    setSubmitting(true);
    auth
      .signOut()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Sign out Success');
        setSubmitting(false);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Sign out error: ', error);
        setSubmitting(false);
      });
  };

  if (get(user, 'email')) {
    return (
      <Layout>
        <Container>
          <Row mt={3} mb={{ xs: 3, md: 0 }} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
            <Col>
              <Button
                fontSize={12}
                variant="dark"
                type="button"
                onClick={handleSignOut}
                disabled={submitting}
                isLoading={submitting}
              >
                Log Out
              </Button>
            </Col>
          </Row>
        </Container>
        <RsvpTable guests={[]} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SignIn />
    </Layout>
  );
};

export default ResponsesPage;
