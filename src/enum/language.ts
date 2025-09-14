import { TFunction } from "i18next";

export enum Languages {
  EN = "en-US",
  PT = "pt-BR",
  ES = "es-ES",
}

export const SUPPORTED_LANGUAGES = Object.values(Languages);

export const getLanguageOptions = (t: TFunction) => [
  { code: Languages.EN, label: t("lang_en"), flag: "🇺🇸" },
  { code: Languages.PT, label: t("lang_pt"), flag: "🇧🇷" },
  { code: Languages.ES, label: t("lang_es"), flag: "🇪🇸" },
];
