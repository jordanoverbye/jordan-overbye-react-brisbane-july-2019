/** @jsx jsx **/
import { createContext } from 'react'
import { jsx } from './jsx'

const theme = {
  colors: {
    primary: 'rebeccapurple',
    secondary: 'hotpink'
  },
  space: [0, 2, 4, 8, 16, 32, 40, 48],
  fontSizes: [14, 16, 18, 24, 32, 40, 48, 56]
}

export const ThemeContext = createContext(theme)

export default function Context() {
  return (
    <ThemeContext.Provider value={theme}>
      <div
        css={{
          backgroundColor: 'colors.primary',
          color: 'colors.secondary',
          fontSize: 'fontSizes[6]',
          padding: 'space[4]'
        }}
      >
        <span>Hello world</span>
      </div>
    </ThemeContext.Provider>
  )
}
