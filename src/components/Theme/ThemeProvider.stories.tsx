import React from 'react';
import classNames from 'classnames';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createStyles, ThemeProvider } from '.';
import { defaultTheme } from './defaultTheme';
import Text from '../Text';
import pkg from './package.json';
import { IThemeProvider, ThemeType } from './types';


export default {
  title: 'Core/Theme',
  component: ThemeProvider,
  parameters: {
    pkg,
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`
  },
} as ComponentMeta<typeof ThemeProvider>;

const contrastMapping = {
  primary: {
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  secondary: {
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  error: {
    dark600: 'both',
    main500: 'both',
    medium400: 'both',
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  success: {
    main500: 'both',
    medium400: 'black',
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  warning: {
    dark600: 'black',
    main500: 'black',
    medium400: 'black',
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  contrast: {
    white: 'black',
  },
  neutralGray: {
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  text: {
    disabled: 'black',
    tint: 'black',
  },
  background: {
    white: 'black',
    extraLightGrey: 'black',
  },
};

interface IBlock {
  withSubTitle: boolean;
  label: string;
  colors: string[];
}

const blocks: IBlock[] = [
  {
    withSubTitle: true,
    label: 'Brand colors',
    colors: ['primary', 'secondary'],
  },
  {
    withSubTitle: true,
    label: 'Status Colors',
    colors: ['error', 'success', 'warning'],
  },
  {
    withSubTitle: false,
    label: 'Contrast colors',
    colors: ['contrast'],
  },
  {
    withSubTitle: false,
    label: 'Neutral Gray',
    colors: ['neutralGray'],
  },
  {
    withSubTitle: false,
    label: 'Text',
    colors: ['text'],
  },
  {
    withSubTitle: false,
    label: 'Surface and background',
    colors: ['background'],
  },
];

const Template: ComponentStory<typeof ThemeProvider> = ({ theme, ...args }: IThemeProvider) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} {...args}>
      {blocks.map(({ label, colors, withSubTitle }) => {
        return (
          <div key={label} className={classes.block}>
            <Text variant="h4" className={classes.title}>{label}</Text>
            {colors.map((color: string) => {
              const themeColors: ThemeType['colors'] = theme.colors;
              const themeColorsNames = Object.keys(themeColors[color]);
              return (
                <div
                  key={color}
                  className={classes.row}
                >
                  {withSubTitle && <Text className={classes.subTitle} variant="body1">{color}</Text>}
                  {themeColorsNames.map((colorName: string) => {
                    const bgColor = themeColors?.[color][colorName];
                    console.log('color, colorName ==>>', color, colorName);
                    console.log('contrastMapping?.[color]?.[colorName] ==>>', contrastMapping?.[color]?.[colorName]);
                    return (
                      <div
                        key={colorName}
                        className={classes.card}
                        style={{ backgroundColor: bgColor }}
                      >
                        <div
                          className={classNames(
                            classes.textWrapper,
                            {
                              [classes.withBorder]: (color == 'contrast') || (color == 'background' && colorName == 'white')
                            })}
                        >
                          {contrastMapping?.[color]?.[colorName] == 'both' ? (
                            <>
                              <Text style={{ color: theme.colors.contrast.white }}>AAA/</Text><Text style={{ color: theme.colors.contrast.black }}>AAA</Text>
                            </>
                          ) : (
                            <Text
                              component="p"
                              className={classes.cardText}
                              style={{ color: contrastMapping?.[color]?.[colorName] ? theme?.colors?.contrast?.black : theme?.colors?.contrast?.white }}
                            >
                              AAA
                            </Text>
                          )}
                        </div>
                        <div className={classes.description}
                        >
                          <Text weight="semiBold" variant="caption2">
                            {colorName}
                          </Text>
                          <Text variant="caption2">
                            {bgColor}
                          </Text>
                        </div>
                      </div>
                    )
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </ThemeProvider>
  );
}

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: defaultTheme
};

function useStyles () {
  return createStyles((theme) => ({
    block: {
      marginBottom: 48,
    },
    title: {
      marginBottom: 12,
    },
    row: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: 10,
      marginBottom: 24,
      boxSizing: 'border-box',
      '& *': {
        boxSizing: 'inherit',
      }
    },
    subTitle: {
      gridColumn: 'span 10',
      textTransform: 'capitalize',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 8,
      boxShadow: '0px 8px 12px 6px rgba(102, 112, 133, 0.15), 0px 4px 4px rgba(102, 112, 133, 0.3)',
      gridColumn: 'span 1',
      height: 80,
      minWidth: 120,
      overflow: 'hidden',
    },
    textWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      flexGrow: 2,
    },
    withBorder: {
      border: [.5, 'solid', theme.colors.contrast.black]
    },
    cardText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
    },
    description: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: '#fff',
    },
  }))();
}
