import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { theme } from './theme'

type Theme = typeof theme
export type ThemeProp = { theme: Theme }

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ThemeProvider, styled }
export default styled
