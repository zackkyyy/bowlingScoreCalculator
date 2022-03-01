import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateScore, restartGame, roll } from "../../store/score";
import { RootState} from "../../app/store";
import './Buttons.css'
import { isFirstRollInFrame, isStrike } from "../../store/ScoreUtils";

const Buttons = () => {
    const rolls = useSelector((state: RootState) => state.score.rolls);
    const [showButtons, setShowButtons] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        setShowButtons(rolls.length < 21)
        if (rolls.length === 21) {
            dispatch(calculateScore())
        }
    }, [rolls])

    const buttonClicked = (currentRoll: number) => {
        dispatch(roll(currentRoll))
        if (!isFirstRollInFrame(rolls) || isStrike(currentRoll)) {
            dispatch(calculateScore())
        }
    }

    const Buttons = () => {
        let int = 11;
        if (!isFirstRollInFrame(rolls) || rolls.length > 19) {
            let previousRoll = rolls[rolls.length - 1]
            int = previousRoll === 'X' ? int : int -= Number(previousRoll);
        }

        let buttons = Array.from(new Array(int)).map((e, i) => i)
            .map(key => <button onClick={() => buttonClicked(key)}>{key}</button>)
        return (
            <>{buttons}</>
        );
    }

    return (
        <div>
            {showButtons && <Buttons />}
            <div>
                <button
                    className={'restartButton'}
                    onClick={() => dispatch(restartGame())}
                >
                    Restart
                </button>
            </div>
        </div>
    )
}

export default Buttons;