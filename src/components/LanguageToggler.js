import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from './SiteMetadata';

const LanguageToggler = () => {
  const { languages } = useSiteMetadata();

  const { langs, defaultLangKey } = languages;

  return (
    <div>
      {langs.map(lang => {
        const homeLink = lang === defaultLangKey ? `/` : `/cn`;
        const displayLang = lang === defaultLangKey ? `English` : `中文`;

        return (
          <Link key={`language_${lang}`} to={homeLink}>
            <span className="fs--1 font-weight-bold text-uppercase bg-light p-1 text-dark mx-1">
              {displayLang}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageToggler;
