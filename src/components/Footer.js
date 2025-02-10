import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{`© 2024 - ${new Date().getFullYear()} | ${t('footer.rights')}`}</p>
    </footer>
  );
};

export default Footer;
