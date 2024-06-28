"use client";
import { Poppins } from "next/font/google";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AppTheme({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: poppins.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
         
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
