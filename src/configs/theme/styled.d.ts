// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      B400: '#0052CC';
      W700: '#fff';
      Y300: '#FFAB00';
      R400: '#DE350B';
      N20: '#F4F5F7';
      N500: '#42526E';
      N800: '#172B4D'
    };
    icons: {};
    elevation: {};
    typography: {};
  }
}
