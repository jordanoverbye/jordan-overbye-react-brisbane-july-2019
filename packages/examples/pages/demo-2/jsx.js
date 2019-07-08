import React from 'react'

let cache = {}
const rules = []
let insert = rule => rules.push(rule)

if (typeof document !== 'undefined') {
  const tag = document.createElement('style')
  const sheet = document.head.appendChild(tag).sheet
  insert = rule => {
    // sheet.insertRule(rule, sheet.cssRules.length)
    rules.push(rule)
    tag.innerHTML = rules.sort().join('')
  }
}

const parseProps = props => {
  insert('.color-primary { color: var(--color-primary); }')
  return 'color-primary'
}

const jsx = (type, props, ...children) => {
  let args = arguments
  let newProps = {}

  for (let key in props) {
    if (key === 'color') continue
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key]
    }
  }

  if (props.color) {
    newProps.className = parseProps(props.color)
    props.color = null
  }

  return React.createElement.apply(null, [type, newProps, ...children])
}

const css = () => rules.sort().join('')

const reset = () => {
  cache = {}
  while (rules.length) rules.pop()
}

export { css, jsx, insert, reset }
