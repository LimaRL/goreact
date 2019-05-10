import { createGlobalStyle } from 'styled-components'
import 'font-awesome/css/font-awesome.css'

import { darken, lighten } from 'polished'

const primaryColor = '#9b65e6'
const successColor = '#63f5b0'
const alertColor = '#f80'
const dangerColor = '#f04'

export const colors = {
  white: '#fff',
  textColor: '#444',
  primaryColor,
  primaryColorDark: darken(0.2, primaryColor),
  primaryColorLight: lighten(0.2, primaryColor),
  successColor,
  successColorDark: darken(0.2, successColor),
  successColorLight: lighten(0.2, successColor),
  alertColor,
  alertColorDark: darken(0.2, alertColor),
  alertColorLight: lighten(0.2, alertColor),
  dangerColor,
  dangerColorDark: darken(0.2, dangerColor),
  dangerColorLight: lighten(0.2, dangerColor)
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body{
    background: #9b65e6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`

export default GlobalStyle
