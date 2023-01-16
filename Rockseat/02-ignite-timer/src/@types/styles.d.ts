import 'styled-components'
import { defaultheme } from '../styles/themes/defaut'

type Themetype = typeof defaultheme

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}
}
