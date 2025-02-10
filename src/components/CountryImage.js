import React from 'react';
import { useTranslation } from 'react-i18next';

// Mapeo de imágenes por idioma
const countryImages = {
  es: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  en: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  fr: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  de: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
};

const CountryImage = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language || "es"; // Predeterminado a español si no se detecta

  return (
    <div className="country-image">
      <h2>{t("country.name")}</h2>
      <img src={countryImages[language]} alt={t("country.name")} width="150" />
    </div>
  );
};

export default CountryImage;
