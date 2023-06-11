import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultheme } from './styles/themes/defaut'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'
export function App() {
  return (
    <ThemeProvider theme={defaultheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
