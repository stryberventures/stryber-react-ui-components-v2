interface IPalette {
  main: string,
  mainLight: string,
  dark: string,
  light: string,
  contrast: string,
  errorRed: string,
}

export interface ITheme {
  primary: IPalette,
  secondary: IPalette,
  font: string,
}
