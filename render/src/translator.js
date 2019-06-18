import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import defaultDe from "../transtlations/de/default.json";
import defaultEn from "../transtlations/en/default.json";

console.log( "123",initReactI18next );

i18next
  .use( initReactI18next )
  .init(
  {
    interpolation:  { escapeValue: false },   // React already does escaping
    lng: "de",
    defaultNS: "default",
    resources:
    {
      en:
      {
        default: defaultEn
      },
      de:
      {
        default: defaultDe
      }
    },

  
    // react i18nect special options
    // react:
    // {
    //   wait: false,
    //   bindI18n: "languageChanged loaded",
    //   bindStore: "added removed",
    //   nsMode: "default"
    // }
  });

export default i18next;