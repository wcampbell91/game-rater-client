import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from './GameProvider'

export const GameList = props => {
  const { games, getGames, searchGame, orderBy } = useContext(GameContext)
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    getGames()
  }, [])

  const updateSearch = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const orderByValue = e => {
    e.preventDefault();
    orderBy(e.target.value)
  }

  return (
    <div className="games-container">
      <article className="games">
        <h2>Games</h2>
        <div className="search col-3">
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
        <div>
          Sort By: 
          <select className="ml-2" name="orderBy" id="orderBy" onChange={orderByValue}>
            <option value="">None</option>
            <option value="year_released">Year Released</option>
            <option value="designer">Designer</option>
          </select>
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
