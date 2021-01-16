import React, { useContext, useState, useEffect } from 'react'
import { GameContext } from './GameProvider'

export const ReviewForm = props => {
  const { createReview } = useContext(GameContext)
  const [ review, setReview ] = useState('')

  const gameId = props.match.params.gameId
  const playerId = localStorage.getItem("user_id")

  const handleControlledInputChange = (e) => {
    e.preventDefault();
    setReview(e.target.value) 
  };

  return(
    <form>
      <div className="form-group">
        <label for="review">Enter Review Here:</label>
        <textarea className="form-control" id="review" rows="3" onChange={handleControlledInputChange}></textarea>
      </div>
      <button type="submit" class="btn btn-1" onClick={e => {
        e.preventDefault();
        const newReview = {
          review: review,
          game: gameId,
          player: playerId
        }
        createReview(newReview)
          .then(props.history.push(`/games/${gameId}`))
      }}>Submit</button>
    </form>
  )
}
