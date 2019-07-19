/** @jsx jsx **/
import { jsx } from './jsx'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  space: [0, 2, 4, 8, 16, 32, 40, 48],
  fontSizes: [14, 16, 18, 24, 32, 40, 48, 56],
  fontFamily: {
    default: 'system-ui, sans-serif',
    mono: '"Courier New", monospace'
  },
  colors: {
    primary: 'hotpink',
    secondary: 'rebeccapurple'
  }
}

const globalStyles = {
  'body, html': {
    margin: 0,
    padding: 0,
    textAlign: 'center'
  }
}

export default function StyledSystemJsxPropExample() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <InnerComponent />
    </ThemeProvider>
  )
}

function InnerComponent() {
  return (
    <div
      css={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'primary',
        fontFamily: 'system-ui'
      }}
    >
      <div>
        <h1
          css={{
            color: 'secondary',
            fontSize: [5, 6, 7],
            mt: 0,
            mb: [6, 7]
          }}
        >
          Hello world 🌎
        </h1>
        <span
          css={{
            fontFamily: 'mono',
            fontSize: [2, 3],
          }}
        >
          This is awesome
        </span>
      </div>
    </div>
  )
}
