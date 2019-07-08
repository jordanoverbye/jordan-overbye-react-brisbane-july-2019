import React from 'react'
import './index.scss'

function Card({ image, title }) {
  return (
    <article className="grid__card">
      {image && (
        <div className="grid__card__media">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="grid__card__body">
        <h3 className="grid__card__body__title">{title}</h3>
      </div>
    </article>
  )
}

export default Card
