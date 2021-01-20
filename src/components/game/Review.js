import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from './GameProvider'

export const Review = props => {
  const { review, userId } = props 
  const { getPlayer, player } = useContext(GameContext)
  const [ currentPlayer, setCurrentPlayer ] = useState({})

  useEffect(() => {
    getPlayer(userId)
    setCurrentPlayer(player)
  }, [])

  return (
      <div class="card">
        <div class="card-body">
          {/* <h2>{currentPlayer && currentPlayer.user ? currentPlayer.user.username : ''}</h2> */}
          <p class="card-text">"{review.review}"</p>
        </div>
      </div>
  )
}
