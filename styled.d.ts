import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    sizes: {
      maxWidth: string;
      mobileBreakpoint: string;
    };
    colors: {
      black: string;
      white: string;
      blue: string;
      red: string;
      yellow: string;
      green: string;
      brown: string;
      grey: string;
      lightGrey: string;
      darkGrey: string;
    };
  }
}
