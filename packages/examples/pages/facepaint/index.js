/** @jsx jsx **/
import { jsx, Global } from '@emotion/core'
import facepaint from 'facepaint'

const mq = facepaint([
  '@media(min-width: 320px)',
  '@media(min-width: 640px)',
  '@media(min-width: 1024px)',
  '@media(min-width: 1280px)'
])

export default function ResponsiveExample() {
  return (
    <div>
      <GlobalStyles />
      <h1
        css={mq({
          height: '100vh',
          width: '100vw',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: ['red', 'fuchsia', 'blue', 'green', 'rebeccapurple'],
          margin: 0
        })}
      >
        Facepaint Example
      </h1>
    </div>
  )
}

function GlobalStyles() {
  return (
    <Global
      styles={{
        'body, html': {
          margin: 0,
          padding: 0
        },
        body: {
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          fontSize: 'calc(1rem + 1vw)'
        }
      }}
    />
  )
}
