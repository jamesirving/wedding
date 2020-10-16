/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { createContext, Component } from 'react';
import { getFirebaseAuth } from '../utils';

const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    const auth = getFirebaseAuth();

    if (!auth) {
      return;
    }

    auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth });
    });
  };

  render() {
    return <UserContext.Provider value={this.state.user}>{this.props.children}</UserContext.Provider>;
  }
}

export { UserProvider, UserContext };
