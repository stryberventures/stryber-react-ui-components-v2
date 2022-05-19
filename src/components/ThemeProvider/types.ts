interface IPalette {
  main: string,
  dark: string,
  light: string,
  contrast: string,
}

interface IDefaultPalette {
  main: string,
  dark: string,
  light: string,
  hover: string,
}

export interface ITheme {
  primary: IPalette,
  secondary: IPalette,
  error: IPalette,
  default: IDefaultPalette,
  background: {
    default: string,
  },
  text: {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  }
  font: string,
}
