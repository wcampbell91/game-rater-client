import React, { useState } from 'react'


export const GameContext = React.createContext()

export const GameProvider = props => {
  const [games, setGames ] = useState([])
  const [game, setGame ] = useState({})
  const [cats, setCats] = useState([])

  
  const getGames = () => {
    return fetch("http://localhost:8000/games", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("gr_token")}`
      }
    })
      .then(response => response.json())
      .then(setGames)
  };

  const getGame = id => {
    return fetch(`http://localhost:8000/games/${id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("gr_token")}`
      }
    })
    .then(response => response.json())
    .then(setGame)
  }

  const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem('gr_token')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    })
      .then(response => response.json())
      .then(getGames)
  }

  const getCategories = () => {
    return fetch(`http://localhost:8000/categories`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("gr_token")}`
      }
    })
    .then(response => response.json())
  }

  return (
    <GameContext.Provider value={{
    games, 
    getGames, 
    getGame, 
    game, 
    setGame, 
    createGame,
    cats,
    setCats,
    getCategories
    }}>
      {props.children}
    </GameContext.Provider>
  )
}
