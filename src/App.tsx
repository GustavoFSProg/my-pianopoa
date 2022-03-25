import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Global from './styles/global'
import { theme } from './styles/theme'
import Footer from './components/Footer/index'
import { AppContainer, Button, TextContainer } from './styles/app-styles'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TextContainer>
        Aprenda piano e harmonia musical online ou presencial através de meu método prático e
        personalizado, que atende desde iniciantes a pianistas avançados.
        <Button>INSCREVA-SE JÁ</Button>
      </TextContainer>
      <Global />
      <Footer />
    </AppContainer>
  </ThemeProvider>
)
