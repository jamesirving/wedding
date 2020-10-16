import React, { useContext, useState } from 'react';

import { Button } from '../../components/button';
import { Container, Col, Row } from '../../components/grid';
import { Layout } from '../../components/layout';
import { RsvpTable } from '../../components/rsvp-table';
import { SignIn } from '../../components/sign-in';
import { UserContext } from '../../providers/user-provider';
import { getFirebaseAuth } from '../../utils';

const ResponsesPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const user = useContext(UserContext);
  const auth = getFirebaseAuth();

  const handleSignOut = () => {
    setSubmitting(true);
    auth
      .signOut()
      .then(() => {
        console.log('Sign out Success');
        setSubmitting(false);
      })
      .catch(error => {
        console.log('Sign out error: ', error);
        setSubmitting(false);
      });
  };

  if (user) {
    return (
      <Layout>
        <Container>
          <Row mt={3} justifyContent="flex-end">
            <Col>
              <Button fontSize={12} variant="dark" type="button" onClick={handleSignOut}>
                {submitting ? 'Logging Out...' : 'Log Out'}
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
