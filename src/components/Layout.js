import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useSiteMetadata from './SiteMetadata';
import '../styles/theme.scss';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="personal" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default TemplateWrapper;
