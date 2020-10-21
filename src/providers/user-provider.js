/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { createContext, Component } from 'react';
import { getFirebaseAuth } from '../utils';

const UserContext = createContext({
  user: {
    isLoading: true,
  },
});

class UserProvider extends Component {
  state = {
    user: {
      isLoading: true,
    },
  };

  componentDidMount = () => {
    const auth = getFirebaseAuth();

    if (!auth) {
      return;
    }

    auth.onAuthStateChanged(userAuth => {
      this.setState({ user: { ...userAuth, isLoading: false } });
    });
  };

  render() {
    return <UserContext.Provider value={this.state.user}>{this.props.children}</UserContext.Provider>;
  }
}

export { UserProvider, UserContext };
