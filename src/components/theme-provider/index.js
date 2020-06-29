import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { BaseStyles } from '../base-styles';
import { theme } from '../../styles';

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <>
      <BaseStyles />
      {children}
    </>
  </StyledThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider };
