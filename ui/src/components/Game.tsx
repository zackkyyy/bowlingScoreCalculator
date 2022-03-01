import React from 'react'
import { ScoreBoard } from "./ScoreBoard/ScoreBoard";
import Buttons from "./buttons/Buttons";
import { Score } from "./score/Score";
import './Game.css'


const Game = () => {
    return (
        <div className="container">
            <Score />
            <ScoreBoard />
            <Buttons />
        </div>
    )
}

export default Game;