import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from './SiteMetadata';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const selectedLanguage = () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const currentLang = pathname.startsWith('/cn') ? 'cn' : 'en';
    return currentLang;
  } else {
    return 'en';
  }
};

export const pathPrefix = () => (selectedLanguage() === 'cn' ? '/cn' : '');

const LanguageToggler = () => {
  const { languages } = useSiteMetadata();

  const { langs, defaultLangKey } = languages;

  return (
    <ButtonGroup size='small' aria-label='Language Toggler'>
      {langs.map(lang => {
        const displayLang = lang === defaultLangKey ? `ENG` : `中文`;
        const pathHome = lang === defaultLangKey ? `/` : `/cn`;

        return (
          <Button
            key={`language_${lang}`}
            component={Link}
            to={pathHome}
            disabled={lang === selectedLanguage()}
          >
            {displayLang}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default LanguageToggler;
