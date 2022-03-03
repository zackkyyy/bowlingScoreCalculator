import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { MAX_ROLLS_ALLOWED } from "../../store/ScoreUtils";

export const Score = () => {
    const totalScore = useSelector((state: RootState) => state.score.totalScore);
    const rolls = useSelector((state: RootState) => state.score.rolls);

    const renderText = () => {
        return rolls.length === MAX_ROLLS_ALLOWED ? `Your score is: ${totalScore}` : `Current score: ${totalScore}`
    }
    return (
        <div className="scoreContainer">
            <p>{renderText()}</p>
        </div>
    )
}