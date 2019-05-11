import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from './SiteMetadata';

// both lang and url needs to be string
const isCurrentLanguage = (lang, url) => {
  return (
    typeof lang === 'string' && typeof url === 'string' && url.includes(lang)
  );
};

const LanguageToggler = () => {
  const { languages } = useSiteMetadata();

  const url = window.location.href;
  const { langs, defaultLangKey } = languages;

  const isChineseSelected = isCurrentLanguage(`cn`, url);
  const homeLink = isChineseSelected ? `/` : `/cn`;
  const displayLang = isChineseSelected ? `en` : `中文`;

  return (
    <Link to={homeLink} className="bg-light p-2 text-dark">
      <span className="font-weight-bold text-uppercase">{displayLang}</span>
    </Link>
  );
};

export default LanguageToggler;
