import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from './GameProvider'

export const Review = props => {
  const { review } = props 

  return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Review</h5>
          <p class="card-text">{review.review}</p>
        </div>
      </div>
  )
}
