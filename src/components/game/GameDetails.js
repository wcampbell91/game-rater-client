import React, { useContext, useEffect } from 'react'
import { GameContext } from './GameProvider'

export const GameDetails = props => {
  const { getGame, game } = useContext(GameContext)
  
  useEffect(() => {
    if ("gameId" in props.match.params) {
      getGame(props.match.params.gameId)
    }
  }, [props.match.params.gameId])
  
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
    </div>
  )

}
