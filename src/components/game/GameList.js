import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from './GameProvider'

export const GameList = props => {
  const { games, getGames, searchGame } = useContext(GameContext)
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    getGames()
  }, [])

  const updateSearch = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <div className="games-container">
      <article className="games">
        <h1>Games</h1>
        <div className="search">
          <label htmlFor="search">Search for a game: </label>
          <input 
            type="text" 
            name="search" 
            required 
            autoFocus 
            className="form-control" 
            defaultValue='' 
            onChange={updateSearch}
          />
          <button className="btn btn-2" type="submit" onClick={e => {
            searchGame(search)
          }}>submit</button>
        </div>
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
