import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../SiteMetadata';

const LanguageToggler = () => {
  const { languages } = useSiteMetadata();

  // const url = location.pathname;
  // const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  // const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  // const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
  // const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
  //   item => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') })
  // );

  return <span className="font-weight-bold text-white">EN</span>;
};

export default LanguageToggler;
