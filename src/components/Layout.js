import '../styles/all.sass';
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';
import { ThemeProvider } from './theme-provider';

const Wrapper = styled.div`
  overflow: hidden;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <Wrapper>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i&display=swap"
        />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

        <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <Navbar />
      <ThemeProvider>{children}</ThemeProvider>
      <Footer />
    </Wrapper>
  );
};

export default TemplateWrapper;
