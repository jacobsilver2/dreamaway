import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      blue: string;
      red: string;
      yellow: string;
      green: string;
      brown: string;
    };
  }
}
