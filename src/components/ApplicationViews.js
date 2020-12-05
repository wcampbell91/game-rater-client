import React from "react"
import { Route } from 'react-router-dom'
import { GameList } from './game/GameList'
import { GameForm } from './game/GameForm'
import { GameDetails } from './game/GameDetails'
import { GameProvider } from './game/GameProvider'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games" render={props => <GameList {...props} />} />
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />
                <Route exact path="/games/:gameId(\d+)" render={props => <GameDetails {...props} />} />
            </GameProvider>
        </main>
    </>
}
