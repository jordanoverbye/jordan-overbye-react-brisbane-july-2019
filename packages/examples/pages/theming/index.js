/** @jsx jsx **/
import { css, jsx, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: 'hotpink',
    secondary: 'lightblue',
    tertiary: 'blue'
  }
}

export default function EmotionThemingExample() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InnerComponent />
    </ThemeProvider>
  )
}

function GlobalStyles() {
  return (
    <Global
      styles={theme => ({
        'body, html': {
          margin: 0,
          padding: 0
        },
        body: {
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          fontSize: 'calc(1rem + 1vw)'
        },
        '#my-span': {
          fontFamily: 'monospace',
          color: theme.colors.tertiary
        }
      })}
    />
  )
}

function InnerComponent() {
  return (
    <div
      css={theme => ({
        height: '100vh',
        width: '100vw',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary
      })}
    >
      <div>
        <h1
          css={theme => css`
            color: ${theme.colors.primary};
            &:before,
            &:after {
              display: inline-block;
              margin: 0 1em;
              content: '👋';
            }
          `}
        >
          Hello World
        </h1>
        <span id="my-span">I'm a span that is globally styled!</span>
      </div>
    </div>
  )
}
