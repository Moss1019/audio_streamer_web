import resolveTheme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren, useMemo } from "react";
import { createTheme, CssBaseline } from "@mui/material";

export interface ThemeSelectorProps { }

function ThemeSelector({children}: PropsWithChildren<ThemeSelectorProps>) {
    const theme = useMemo(() => {
        return createTheme(resolveTheme(true));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default ThemeSelector;
