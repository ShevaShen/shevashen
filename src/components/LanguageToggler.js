import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from './SiteMetadata';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const LanguageToggler = () => {
  const { languages } = useSiteMetadata();

  const { langs, defaultLangKey } = languages;

  return (
    <ButtonGroup size="small" aria-label="Language Toggler">
      {langs.map(lang => {
        const homeLink = lang === defaultLangKey ? `/` : `/cn`;
        const displayLang = lang === defaultLangKey ? `ENG` : `中文`;

        return (
          <Button key={`language_${lang}`} component={Link} to={homeLink}>
            {displayLang}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default LanguageToggler;
