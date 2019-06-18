import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import defaultDe from "../transtlations/de/default.json";
import defaultEn from "../transtlations/en/default.json";

i18next
  .use( initReactI18next )
  .init(
  {
    interpolation:  { escapeValue: false },   // React already does escaping
    lng: "en",
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
    }
  });

export default i18next;