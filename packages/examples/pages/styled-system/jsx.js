import { jsx as emotion, Global } from '@emotion/core'
import css from '@styled-system/css'

const getStyles = props => {
  if (!props.css) return undefined
  return theme => {
    const styles = css(props.css)(theme)
    return styles
  }
}

const parseProps = props => {
  if (!props) return null
  const nextProps = {}
  for (let key in props) {
    if (key === 'css') continue
    nextProps[key] = props[key]
  }
  nextProps.css = getStyles(props)

  return nextProps
}

export const jsx = (type, props, ...children) => {
  return emotion.apply(undefined, [type, parseProps(props), ...children])
}
