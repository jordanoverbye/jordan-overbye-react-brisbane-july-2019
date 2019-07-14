import * as React from 'react'
import get from 'lodash.get'
import { ThemeContext } from './'

const parseStyles = (styles = {}, theme) => {
  return Object.keys(styles).reduce((acc, key) => {
    const value = styles[key]
    const valueFromTheme = get(theme, value, value)
    acc[key] = valueFromTheme
    return acc
  }, {})
}

const parseProps = (props, theme) => {
  if (!props) return null
  const nextProps = {}
  for (let key in props) {
    if (key === 'css') continue
    nextProps[key] = props[key]
  }
  nextProps.style = parseStyles(props.css, theme)
  return nextProps
}

const WrappedComponent = ({ CUSTOM_TYPE, ...props }) => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        return React.createElement(CUSTOM_TYPE, parseProps(props, theme))
      }}
    </ThemeContext.Consumer>
  )
}

export const jsx = (type, props, ...children) => {
  if (props == null || props.css == null) {
    return React.createElement.apply(undefined, [type, props, ...children])
  }

  const newComponent = WrappedComponent
  const newProps = {
    ...props,
    CUSTOM_TYPE: type
  }

  return React.createElement.apply(undefined, [
    newComponent,
    newProps,
    ...children
  ])
}
