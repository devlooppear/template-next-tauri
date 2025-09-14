"use client";

import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  PaletteOptions,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import systemColors from "@/common/constants/systemColors";
import { ThemeMode } from "@/enum/theme";
import { ThemeProvider, useThemeContext } from "./ThemeContext";

const paletteConfig: Record<ThemeMode, PaletteOptions> = {
  [ThemeMode.LIGHT]: {
    primary: { ...systemColors.blue, main: systemColors.blue[500] },
    secondary: { ...systemColors.indigo, main: systemColors.indigo[500] },
    success: { main: systemColors.success },
    warning: { main: systemColors.warning },
    error: { main: systemColors.error },
    info: { main: systemColors.info },
    background: { default: systemColors.gray[50], paper: systemColors.gray[100] },
    text: { primary: systemColors.gray[900], secondary: systemColors.gray[700] },
  },
  [ThemeMode.DARK]: {
    primary: { ...systemColors.blue, main: systemColors.blue[200] },
    secondary: { ...systemColors.indigo, main: systemColors.indigo[200] },
    success: { main: systemColors.success },
    warning: { main: systemColors.warning },
    error: { main: systemColors.error },
    info: { main: systemColors.info },
    background: { default: systemColors.gray[800], paper: systemColors.gray[800] },
    text: { primary: systemColors.gray[50], secondary: systemColors.gray[200] },
  },
};

const ThemeRegistryContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { mode } = useThemeContext();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: paletteConfig[mode],
        typography: { fontFamily: "Roboto, Arial, sans-serif" },
      }),
    [mode]
  );

  const scrollbarStyles = {
    '::-webkit-scrollbar-track': {
      background: theme.palette.background.paper,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.mode === 'light' ? systemColors.gray[400] : systemColors.gray[500],
      borderRadius: '6px',
      border: `3px solid ${theme.palette.background.paper}`,
    },
    'html': {
        scrollbarColor: `${theme.palette.mode === 'light' ? systemColors.gray[400] : systemColors.gray[500]} ${theme.palette.background.paper}`
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={scrollbarStyles} />
      {children}
    </MuiThemeProvider>
  );
};

const ThemeRegistry: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider>
        <ThemeRegistryContent>{children}</ThemeRegistryContent>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegistry;
export { systemColors, ThemeMode };
