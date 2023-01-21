import { globalStyle } from '@vanilla-extract/css'

globalStyle('::-webkit-file-upload-button', {
  appearance: 'button',
  font: 'inherit',
})

globalStyle('[hidden]', {
  display: 'none',
})

globalStyle("[type='button']:-moz-focusring", {
  outline: '1px dotted ButtonText',
})

globalStyle("[type='button']::-moz-focus-inner", {
  borderStyle: 'none',
  padding: '0',
})

globalStyle("[type='checkbox']", {
  boxSizing: 'border-box',
  padding: '0',
})

globalStyle("[type='number']::-webkit-inner-spin-button", {
  height: 'auto',
})

globalStyle("[type='number']::-webkit-outer-spin-button", {
  height: 'auto',
})

globalStyle("[type='radio']", {
  boxSizing: 'border-box',
  padding: '0',
})

globalStyle("[type='reset']", {
  WebkitAppearance: 'button',
})

globalStyle("[type='reset']:-moz-focusring", {
  outline: '1px dotted ButtonText',
})

globalStyle("[type='reset']::-moz-focus-inner", {
  borderStyle: 'none',
  padding: '0',
})

globalStyle("[type='search']", {
  appearance: 'none',
})

globalStyle("[type='search']::-webkit-search-cancel-button", {
  appearance: 'none',
})

globalStyle("[type='search']::-webkit-search-decoration", {
  appearance: 'none',
})

globalStyle("[type='submit']", {
  WebkitAppearance: 'button',
})

globalStyle("[type='submit']:-moz-focusring", {
  outline: '1px dotted ButtonText',
})

globalStyle("[type='submit']::-moz-focus-inner", {
  borderStyle: 'none',
  padding: '0',
})

globalStyle('a', {
  background: 'transparent',
  textDecorationSkip: 'objects',
})

globalStyle('a:active', {
  outlineWidth: '0',
})

globalStyle('a:hover', {
  outlineWidth: '0',
})

globalStyle('abbr[title]', {
  borderBottom: 'none',
  textDecoration: 'underline',
})

globalStyle('article', {
  display: 'block',
})

globalStyle('aside', {
  display: 'block',
})

globalStyle('audio', {
  display: 'inline-block',
})

globalStyle('audio:not([controls])', {
  display: 'none',
  height: '0',
})

globalStyle('b', {
  fontWeight: 'bolder',
})

globalStyle('body', {
  margin: '0',
})

globalStyle('button', {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  overflow: 'visible',
  textTransform: 'none',
  WebkitAppearance: 'button',
})

globalStyle('button:-moz-focusring', {
  outline: '1px dotted ButtonText',
})

globalStyle('button::-moz-focus-inner', {
  borderStyle: 'none',
  padding: '0',
})

globalStyle('canvas', {
  display: 'inline-block',
})

globalStyle('code', {
  fontFamily: 'monospace , monospace',
  fontSize: '1em',
})

globalStyle('details', {
  display: 'block',
})

globalStyle('dfn', {
  fontStyle: 'italic',
})

globalStyle('figcaption', {
  display: 'block',
})

globalStyle('figure', {
  display: 'block',
})

globalStyle('footer', {
  display: 'block',
})

globalStyle('h1', {
  fontSize: '2em',
})

globalStyle('header', {
  display: 'block',
})

globalStyle('hr', {
  boxSizing: 'content-box',
  height: '0',
  overflow: 'visible',
})

globalStyle('html', {
  fontFamily: 'sans-serif',
  lineHeight: '1.15',
  textSizeAdjust: '100%',
})

globalStyle('img', {
  borderStyle: 'none',
  verticalAlign: 'middle',
})

globalStyle('input', {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  overflow: 'visible',
})

globalStyle('kbp', {
  fontFamily: 'monospace , monospace',
  fontSize: '1em',
})

globalStyle('legend', {
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'table',
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal',
})

globalStyle('main', {
  display: 'block',
})

globalStyle('mark', {
  backgroundColor: '#ff0',
  color: '#000',
})

globalStyle('menu', {
  display: 'block',
})

globalStyle('nav', {
  display: 'block',
})

globalStyle('optgroup', {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
})

globalStyle('pre', {
  fontFamily: 'monospace , monospace',
  fontSize: '1em',
})

globalStyle('progress', {
  display: 'inline-block',
  verticalAlign: 'baseline',
})

globalStyle('samp', {
  fontFamily: 'monospace , monospace',
  fontSize: '1em',
})

globalStyle('section', {
  display: 'block',
})

globalStyle('select', {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  textTransform: 'none',
})

globalStyle('small', {
  fontSize: '80%',
})

globalStyle('strong', {
  fontWeight: 'bolder',
})

globalStyle('sub', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
  bottom: '-0.25em',
})

globalStyle('summary', {
  display: 'list-item',
})

globalStyle('sup', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
  top: '-0.5em',
})

globalStyle('svg:not(:root)', {
  overflow: 'hidden',
})

globalStyle('template', {
  display: 'none',
})

globalStyle('textarea', {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  overflow: 'auto',
})

globalStyle('video', {
  display: 'inline-block',
})
