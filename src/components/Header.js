import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="header">
      <h1>{t('title')}</h1>
      <select className="language-selector" value={i18n.language} onChange={changeLanguage}>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option> {/* Agregado soporte para alemán */}
      </select>
    </header>
  );
};

export default Header;
