import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from './GameProvider'
import { Review } from './Review'
import { Link } from 'react-router-dom'

export const GameDetails = props => {
  const { getGame, game, getReviews, createRating, createActionImage } = useContext(GameContext)
  const [ reviews, setReviews ] = useState([])
  const [rating, setRating] = useState('')
  const [image, setImage] = useState('')

  const userId = localStorage.getItem("user_id")
  const gameId = props.match.params.gameId

  useEffect(() => {
    if ("gameId" in props.match.params) {
      getGame(props.match.params.gameId)
      console.log(game.average_rating)
    }
  }, [props.match.params.gameId])

  useEffect(() => {
    getReviews()
    .then(reviews => setReviews(reviews))
  }, [])

  const gameReviews = reviews ? reviews.map(review => {
      return review.game.id === game.id ? <Review review={review} key={review.id} userId={review.player.id}/> : ''
    }) : ''

  const newRating = e => {
    setRating(e.target.value)
  }

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file)
  }

  const createGameImageString = e => {
    e.preventDefault();
    getBase64(e.target.files[0], (base64ImageString) => {
      console.log("Base64 of file is", base64ImageString);
      setImage(base64ImageString)
    })
  }


  
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
        <h2 className="text-center">Reviews:</h2>
        {gameReviews}
        <Link className="btn btn-2" to={`/review/${game.id}`}>Review Game</Link>
      </div>
      <div className="game__rating">
        <div className="creat_rating">
          <label for="game_rating" className="form-label">Rate this game: </label>
          <input type="range" className="form-range" id="game_rating" step='1' min='0' max='10' onChange={newRating} />
          <button className="btn btn-2" type="submit" onClick={e => {
                e.preventDefault();
                createRating({
                  rating: rating,
                  game: gameId,
                  player: userId
                })
          }}>submit</button>
        </div>
        Avg. Rating: {game && game.average_rating}</div>
      <div className="actionPic">
        <input type="file" id="game_image" onChange={createGameImageString} />
        <input type="hidden" name="game_id" value={gameId} />
        <button className='btn-2' onClick={e => {
          createActionImage({
            game: gameId,
            action_pic: image
          })
        }}>Upload Image</button>
      </div>
      </div>
    
  )

}
