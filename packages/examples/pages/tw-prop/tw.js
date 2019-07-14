import React from 'react'

// Ideally this would come from your tailwinds theme.js
const sep = '-'
const psuedoSep = ':'
const psuedoClasses = [
  'active',
  'focus',
  'focus-within',
  'group-hover',
  'hover'
]
const keyOnlyClasses = ['container', 'rounded']
const valOnlyClasses = ['display', 'font-smoothing', 'font-style']

const kebabCase = str =>
  str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()

const isObject = value => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

const mapArrayToTailwind = (key, values) => {
  const screens = ['default', 'sm', 'md', 'lg']
  return screens
    .map((screen, index) => {
      const val = values[index]
      if (!val) return null
      if (index === 0) return mapStringToTailwind(key, val)
      return mapStringToTailwind(screen + psuedoSep + key, val)
    })
    .filter(i => i)
    .flat()
    .join(' ')
}

const mapStringToTailwind = (key, str) => {
  return String(str)
    .split(' ')
    .map(val => {
      const parsedKey = kebabCase(key)
      if (keyOnlyClasses.indexOf(parsedKey) >= 0 && val === 'default')
        return parsedKey
      if (valOnlyClasses.indexOf(parsedKey) >= 0) return val
      if (psuedoClasses.indexOf(parsedKey) >= 0)
        return parsedKey + psuedoSep + val
      return parsedKey + sep + val
    })
    .flat()
}

const mapObjectToTawild = obj => {
  return Object.keys(obj)
    .map(key => {
      const val = obj[key]
      if (!val) return null
      if (Array.isArray(val)) {
        return mapArrayToTailwind(key, val)
      }
      return mapStringToTailwind(key, val)
    })
    .flat()
}

export function jsx(type, props) {
  let args = arguments

  if (!props || !props.tw) {
    return React.createElement.apply(undefined, args)
  }

  let classes = []

  if (isObject(props.tw)) {
    classes = mapObjectToTawild(props.tw)
  } else {
    classes = [props.tw]
  }

  args[1].tw = null
  args[1].className = classes.join(' ')

  return React.createElement.apply(undefined, args)
}
