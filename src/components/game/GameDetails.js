import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from './GameProvider'
import { Review } from './Review'
import { Link } from 'react-router-dom'

export const GameDetails = props => {
  const { getGame, game, getReviews } = useContext(GameContext)
  const [ reviews, setReviews ] = useState([])
  
  useEffect(() => {
    if ("gameId" in props.match.params) {
      getGame(props.match.params.gameId)
    }
  }, [props.match.params.gameId])

  useEffect(() => {
    getReviews()
    .then(reviews => setReviews(reviews))
  }, [])

  const gameReviews = reviews && reviews.results ? reviews.results.map(review => {
      return review.game === game.id ? <Review review={review} key={review.id} /> : ''
    }) : ''
  
  return (
    <div className="game-container">
      <article className="game">
        <section key={`game--${game.id}`}>
          <div className="game__title">{game.title}</div>
          <div className="game__description">{game.description}</div>
          <div className="game__designer">{game.designer}</div>
          <div className="game__year_released">Year Released: {game.year_released}</div>
          <div className="game__num_plaeyers">Number of Players: {game.num_players}</div>
          <div className="game__categories">Categories: {game.category && game.category.name} </div>
        </section>
      </article>
      <div className="reviews card-deck">
        {gameReviews}
      </div>
      <Link className="btn btn-2" to={`/review/${game.id}`}>Review Game</Link>
    </div>
    
  )

}
