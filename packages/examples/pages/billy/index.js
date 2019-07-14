import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { data, modes } from '../../data'
import Card from './Card'
import Button from './Button'
import './index.scss'

const colCountOptions = [1, 2, 3]
const initialColCount = 3

export default function SassExample() {
  const [mode, setMode] = useState(modes[0])
  const [colCount, setColCount] = useState(initialColCount)

  const cycleMode = () =>
    setMode(modes[(modes.indexOf(mode) + 1) % modes.length])

  useEffect(() => {
    document.querySelector('body').setAttribute('mode', mode)
  }, [mode])

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">📷 🐶 Pics of Billy</h1>
      </header>
      <main>
        <div className="options">
          <div className="options__group">
            <Button onClick={cycleMode}>{mode}</Button>
          </div>
          <div className="options__group">
            {colCountOptions.map(option => {
              const isActive = option === colCount
              return (
                <Button
                  key={option}
                  className={cx('options__group__item', {
                    'options__group__item--active': isActive
                  })}
                  onClick={() => setColCount(option)}
                >
                  {option}
                </Button>
              )
            })}
          </div>
        </div>
        <div className={`grid grid--${colCount}`}>
          {data.map(item => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </main>
    </div>
  )
}
