import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
 ${normalize()};
    html {
       max-width: 100vw;
       max-height: 100vh;
        box-sizing: border-box;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: inherit; 
        &:before{
            box-sizing: inherit; 
        } 
        &:after{
            box-sizing: inherit; 
        }
    }
`;
