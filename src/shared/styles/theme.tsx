import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  bg: "rgba(255, 153, 255, 0.667)",
  text: "#ff4848",
};
interface ThemeProps {
  children: ReactElement;
}
export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
