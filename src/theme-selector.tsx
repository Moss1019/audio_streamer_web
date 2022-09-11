import resolveTheme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren, useMemo } from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { useAppSelector } from "./store/hooks";

export interface ThemeSelectorProps { }

function ThemeSelector({children}: PropsWithChildren<ThemeSelectorProps>) {
    const isLight = useAppSelector((state) => state.theme.value);

    const theme = useMemo(() => {
        return createTheme(resolveTheme(isLight));
    }, [isLight]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default ThemeSelector;
