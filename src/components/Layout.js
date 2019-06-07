import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useSiteMetadata from './SiteMetadata';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="personal" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default TemplateWrapper;
