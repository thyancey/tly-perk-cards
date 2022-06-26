import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }
  #root{
    margin:0 auto;
  }
  h1, h2, h3, h4{
    font-family: 'Bevan', cursive;
  }
  a, p, span, h5, h6{
    font-family: 'Cabin', sans-serif;
  }
  h1{
    font-size: 5rem;
  }
  h2{
    font-size: 4rem;
  }
  h3{
    font-size: 3.5rem;
  }
  h4{
    font-size: 2.5rem;
  }
  h5{
    font-size: 2rem;
  }
  p, span{
    font-size:2rem;
  }

  html{
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cabin', sans-serif;
    background-color: black;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

/*
export const mixinFontFamily = (style) => {
  switch(style){
    case 'details' : return css`font-family: 'Roboto', sans-serif`;
    case 'display': return css`font-family: 'Bevan', cursive`;
    default: return css`font-family: 'Roboto', sans-serif`;
  }
}
*/
export const listColors = () => {
  return Object.keys(store.colors);
}


export const getColor = (colorId: tColor) => {
  return store.colors[colorId] as CssString; 
}

export const getShadow = (shadowId: tShadow) => {
  return store.shadows[shadowId] as CssString;
}

export const getBreakpoint = (breakpointId: tBreakpoint) => {
  return store.breakpoints[breakpointId] as CssString;
}

type CssString = string;

type tShadow = 'z1' | 'z2' | 'z3';
const shadows = {
  z1: '-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.16)',
  z2: '-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.36)',
  z3: '-.2rem .5rem 1rem .2rem rgba(0,0,0,.36)'
}
type tColor = 'black' | 'grey_dark' |'grey' | 'grey_light' | 'white' | 'brown_dark' | 'brown' | 'brown_light' | 'green' | 'green_light' | 'red' | 'pink';
const colors = {
  black: '#000000',
  grey_dark: '#222034',
  grey: '#847e87',
  grey_light: '#9badb7',
  white: '#fef8dd',
  brown_light: '#eec398',
  brown: '#8f563b',
  brown_dark: '#663931',
  green: '#4b692f',
  green_light: '#6abe30',
  red: '#ac3232',
  pink: '#d77bba'
}

type tBreakpoint = 'mobile_tiny' | 'mobile_medium' | 'mobile_large' | 'tablet' | 'desktop';
const breakpoints = {
  mobile_tiny: '300px',
  mobile_medium: '400px',
  mobile_large: '500px',
  tablet: '768px',
  desktop: '1024px'
}

type ThemeStore = {
  colors: typeof colors,
  shadows: typeof shadows,
  breakpoints: typeof breakpoints
}

export const store: ThemeStore = {
  colors: colors,
  shadows: shadows,
  breakpoints: breakpoints
}
