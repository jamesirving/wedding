import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';
import { UserProvider } from './src/providers/user-provider';

export const wrapRootElement = ({ element }) => <UserProvider>{element}</UserProvider>;
