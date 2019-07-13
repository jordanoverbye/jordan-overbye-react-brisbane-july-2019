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
      <main>
        <h1 className="title">📷 🐶 Pics of Billy</h1>
        <div className="options">
          <div className="option-group">
            <Button onClick={cycleMode}>{mode}</Button>
          </div>
          <div className="option-group">
            {colCountOptions.map(option => {
              const isActive = option === colCount
              return (
                <Button
                  key={option}
                  className={cx('option-group__item', {
                    'option-group__item--active': isActive
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
