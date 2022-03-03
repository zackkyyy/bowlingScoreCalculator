import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { insertRoll, replaceCharactersWithNumericValue } from './ScoreUtils';

type initialStateType = { rolls: string[]; totalScore: number };

export const calculateScore = createAsyncThunk(
    'score/calculateScore',
    async (_, { getState } ) => {
        const { score } = getState() as { score: initialStateType };
        let filtered: Array<number> = replaceCharactersWithNumericValue(score.rolls);

        return fetch(`http://localhost:8080/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filtered)
        }).then(res => res.json());
    }
)


let initialState : initialStateType = {
    rolls: [],
    totalScore: 0,
};

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        roll: (state, { payload }) => {
            const tempState = {...state};
            tempState.rolls = insertRoll(tempState.rolls, payload);
            return tempState
        },
        restartGame: () => {
            return initialState;
        }
    },
    extraReducers : (builder => {
        builder.addCase(calculateScore.pending, (state) => {
            const tempState = {...state};
            tempState.totalScore = 0;
            return tempState;
        });
        builder.addCase(calculateScore.fulfilled,
            (state, { payload }) => {
                const tempState = {...state};
                tempState.totalScore = payload;
                return tempState;
            });
    })
})

export const { roll, restartGame } = scoreSlice.actions;

export default scoreSlice.reducer;
