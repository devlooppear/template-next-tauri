"use client";

import React from "react";
import { Select, MenuItem, Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getLanguageOptions, Languages } from "@/enum/language";
import { getAppLanguage, setAppLanguage } from "@/common/utils/language";

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const [language, setLanguage] = React.useState<Languages>(getAppLanguage());
  const theme = useTheme();
  const LANGUAGE_OPTIONS = getLanguageOptions(t);

  const handleChange = (event: any) => {
    const newLang = event.target.value as Languages;
    setLanguage(newLang);
    setAppLanguage(newLang);
  };

  return (
    <Select
      value={language}
      onChange={handleChange}
      variant="outlined"
      size="small"
      sx={{
        width: "100%",
        maxWidth: "185px",
        fontSize: "0.9rem",
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        '& .MuiSelect-icon': {
            color: theme.palette.text.secondary,
        },
      }}
    >
      {LANGUAGE_OPTIONS.map((option) => (
        <MenuItem key={option.code} value={option.code}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography component="span" sx={{ fontSize: "1.2rem" }}>
              {option.flag}
            </Typography>
            <Typography component="span">{option.label}</Typography>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
