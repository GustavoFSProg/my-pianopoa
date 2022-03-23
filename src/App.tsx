import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Global from './styles/global'
import { theme } from './styles/theme'
import Footer from './components/Footer/index'
import { AppContainer } from './styles/app-styles'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Global />
      <Footer />
    </AppContainer>
  </ThemeProvider>
)
