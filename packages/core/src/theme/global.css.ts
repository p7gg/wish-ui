import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html[data-wish-theme=dark]', {
  colorScheme: 'dark',
})

globalStyle('body', {
  fontFamily: vars.fonts.sans,
  backgroundColor: vars.colors.white,
  color: vars.colors.gray12,
  lineHeight: 1.55,
  fontSize: '1rem',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('html[data-wish-theme=dark] body', {
  backgroundColor: vars.colors.gray1,
})
