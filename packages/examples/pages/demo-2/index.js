/** @jsx jsx **/
import { jsx } from './jsx'
import theme from './theme'
import ThemeProvider from './ThemeProvider'

const DemoCustomCSS = () => {
  return (
    <ThemeProvider theme={theme}>
      <div color="primary">Hello</div>
    </ThemeProvider>
  )
}

export default DemoCustomCSS
