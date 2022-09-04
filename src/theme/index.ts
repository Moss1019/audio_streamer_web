import dark from './dark';
import light from './light';
import { ThemeOptions } from '@mui/material';

const resolveTheme = (isLight: boolean): ThemeOptions => {
    return isLight ? light : dark;
}

export default resolveTheme;
