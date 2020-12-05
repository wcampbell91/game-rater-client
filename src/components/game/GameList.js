import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from './GameProvider'

export const GameList = props => {
  const { games, getGames } = useContext(GameContext)

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="games-container">
      <article className="games">
        <h1>Games!</h1>
        {
          games.map(game => {
            return <section key={`game--${game.id}`} className="game">
              <div className="game__title">
                <Link className="toGame" to={`/games/${game.id}`}>{game.title}</Link>
              </div>
            </section>
          })
        }
        <button className="btn btn-2 btn-sep icon-create text-center" onClick={
          () => {
            props.history.push({ pathname: "/games/new"})
          }}>Register New Game</button>
      </article>
      
    </div>
  )
}
