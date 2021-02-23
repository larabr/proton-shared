// @ts-nocheck Disable import errors from ds
import themeDarkSvg from 'design-system/assets/img/pm-images/theme-dark.svg';
import themeTestSvg from 'design-system/assets/img/pm-images/theme-company.svg';
import themeDarkmodeSvg from 'design-system/assets/img/pm-images/theme-darkmode.svg';
import darkTheme from 'design-system/_sass/themes/dark-theme.scss';
import monokaiTheme from 'design-system/_sass/themes/monokai-theme.scss';
import pikachuTheme from 'design-system/_sass/themes/pikachu-theme.scss';

import { c } from 'ttag';

export const CUSTOM_THEME = {
    getI18NLabel() {
        return c('Theme').t`Custom mode`;
    },
    identifier: '/* custom-theme */',
    src: themeTestSvg,
    customizable: true,
} as const;

export enum ThemeTypes {
    Default = 0,
    Dark = 1,
    Monokai = 2,
    Pikachu = 3,
}

export const PROTON_THEMES = {
    DEFAULT: {
        getI18NLabel() {
            return c('Theme').t`Default mode`;
        },
        identifier: ThemeTypes.Default,
        src: themeDarkSvg,
        theme: '',
    },
    DARK: {
        getI18NLabel() {
            return c('Theme').t`Dark mode`;
        },
        identifier: ThemeTypes.Dark,
        src: themeDarkmodeSvg,
        theme: darkTheme.toString(),
    },
    MONOKAI: {
        getI18NLabel() {
            return c('Theme').t`Dark mode`;
        },
        identifier: ThemeTypes.Dark,
        src: null,
        theme: monokaiTheme.toString(),
    },
    PIKACHU: {
        getI18NLabel() {
            return c('Theme').t`Pikachu`;
        },
        identifier: ThemeTypes.Pikachu,
        src: null,
        theme: pikachuTheme.toString(),
    },
} as const;
