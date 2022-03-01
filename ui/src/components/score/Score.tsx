import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const Score = () => {
    const totalScore = useSelector((state: RootState) => state.score.totalScore);
    const rolls = useSelector((state: RootState) => state.score.rolls);

    const renderText = () => {
        return rolls.length === 21 ? `Your score is: ${totalScore}` : `Current score: ${totalScore}`
    }
    return (
        <div className="scoreContainer">
            <p>{renderText()}</p>
        </div>
    )
}