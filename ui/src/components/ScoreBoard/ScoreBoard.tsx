import React from 'react';
import './ScoreBoard.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const ScoreBoard = () => {
    const rolls = useSelector((state: RootState) => state.score.rolls);

    const Headers = () => {
        const headers = Array.from(new Array(10))
            .map((item: any, key) => <td colSpan={6}>{key + 1}</td>)
        return (
            <tr className='headers'>
                {headers}
            </tr>
        )
    }

    const FrameRolls = () => {
        const scores = rolls.map((frame, index) => {
            if (index > 17) {
                return <td colSpan={2}>{frame}</td>
            }
            return <td colSpan={3}>{frame}</td>
        })
        return (
            <tr className='rollsRwo'>
                {rolls.length === 0 && <div className='filler'></div>}
                {scores}
            </tr>
        )
    }

    return (
        <table className='scoreBoard' cellPadding='0' cellSpacing='0'>
            <tbody>
            <Headers />
            <FrameRolls />
            </tbody>
        </table>

    )
}