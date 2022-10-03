import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const darkTheme = createTheme({
  type: "dark",
});
const lightTheme = createTheme({
  type: "light",
});
const themeValue = {
  light: lightTheme.className,
  dark: darkTheme.className,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" value={themeValue}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
