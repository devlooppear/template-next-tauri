"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { useThemeContext } from "@/provider/theme/ThemeContext";
import { ThemeMode } from "@/enum/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ThemeModeSwitcher() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
      {mode === ThemeMode.DARK ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
