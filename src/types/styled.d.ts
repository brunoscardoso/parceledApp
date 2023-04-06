import 'styled-components';

interface IPalette {
  primary: string;
  secondary?: string;
  tertiary?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      black: IPalette;
      light: IPalette;
      blue: IPalette;
      gray: IPalette;
      orange: IPalette;
      success: IPalette;
      error: IPalette;
      disabled: IPalette;
    };
  }
}
