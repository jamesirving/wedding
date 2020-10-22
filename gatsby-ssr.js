import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';

import { UserProvider } from './src/providers/user-provider';
import { Layout } from './src/components/layout';

export const wrapRootElement = ({ element }) => <UserProvider>{element}</UserProvider>;

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
