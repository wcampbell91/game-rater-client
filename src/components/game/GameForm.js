import React, { useContext, useState, useEffect } from 'react'
import { GameContext } from './GameProvider'

export const GameForm = props => {
  const {createGame, getCategories, cats, setCats } = useContext(GameContext)

  const [currentGame, setCurrentGame] = useState({
    title: '',
    description: '',
    designer: '',
    year_released: 0,
    num_players: 0,
    game_image: '',
    categoryId: 0
  })
  
  useEffect(() => {
    getCategories()
      .then(setCats)
  }, [])
  
  const handleControlledInputChange = (e) => {
    currentGame[e.target.name] = e.target.value
    setCurrentGame(currentGame)
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input 
            type="text" 
            name="title" 
            required 
            autoFocus 
            className="form-control" 
            defaultValue={currentGame.title} 
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">description: </label>
          <input 
            type="text" 
            name="description" 
            required 
            className="form-control" 
            defaultValue={currentGame.description} 
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="designer">Designer: </label>
          <input 
          type="text"
          name="designer"
          required 
          defaultValue={currentGame.designer}
          className='form-control'
          onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="year_released">Year Realeased</label>
          <input 
            type="text" 
            name="year_released" 
            required 
            className="form-control" 
            defaultValue={currentGame.year_released} 
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="num_players">Number Of Players</label>
          <input 
            type="text" 
            name="num_players"
            required 
            className="form-control" 
            defaultValue={currentGame.num_players} 
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="game_image">Game Image</label>
          <input 
            type="text" 
            name="game_image" 
            required 
            className="form-control" 
            value={currentGame.game_image} 
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="categoryId" id="categories" defaultValue={currentGame.categoryId} onChange={handleControlledInputChange}>
            {
              cats.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)
            }
          </select>
        </div>
      </fieldset>
      <button type="submit"
      onClick={(e) => {
        e.preventDefault();
        const game = {
          title: currentGame.title,
          description: currentGame.description,
          designer: currentGame.designer,
          year_released: parseInt(currentGame.year_released),
          num_players: parseInt(currentGame.num_players),
          game_image: currentGame.game_image,
          categoryId: parseInt(currentGame.categoryId)
        }
        createGame(game)
          .then(props.history.push({pathname: "/games"}))
      }} className="btn btn-primary">Create</button>
    </form>
  )
  }
