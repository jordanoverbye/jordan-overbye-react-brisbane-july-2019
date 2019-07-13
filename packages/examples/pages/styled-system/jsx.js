import { jsx as emotion, Global } from '@emotion/core'
import css from '@styled-system/css'

const getStyles = props => theme => {
  if (!props.ss && !props.css) return undefined
  const styles = css(props.ss)(theme)
  const raw = typeof props.css === 'function' ? props.css(theme) : props.css
  return [styles, raw]
}

const parseProps = props => {
  if (!props) return null
  const nextProps = {}
  for (let key in props) {
    if (key === 'ss') continue
    nextProps[key] = props[key]
  }
  nextProps.css = getStyles(props)

  return nextProps
}

export const jsx = (type, props, ...children) => {
  return emotion.apply(undefined, [type, parseProps(props), ...children])
}
