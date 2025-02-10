import React from 'react';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation();

  return (
    <main className="content">
      <p>{t('welcome')}</p>
    </main>
  );
};

export default Content;
