import { useEffect } from 'react'
import { insert } from './jsx'

const ThemeProvider = ({ children, theme }) => {
  useEffect(() => {
    let rules = ['']
    Object.keys(theme).forEach(category => {
      Object.keys(theme[category]).forEach(key => {
        const value = theme[category][key]
        rules.push(`--${category}-${key}: ${value};`)
      })
    })
    insert(`:root { ${rules.join(' ')} }`)
  }, [theme])

  return children
}

export default ThemeProvider
