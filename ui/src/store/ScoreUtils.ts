
const isLastFrame = (list: string[]) => list.length > 17;
const isSpare = (list: string[], int: number) => Number(list[list.length - 1]) + int === 10;
const isStrike = (roll: number) => roll === 10;
const isFirstRollInFrame = (list: string[]) => list.length % 2 === 0;
const STRIKE_SIGN = 'X', SPARE_SIGN = '/', EMPTY_SIGN = ' ';

const insertRoll = (list: string[], roll: number) => {
    if (isLastFrame(list)) {
        handleLastFrame(list, roll)
    } else if (isStrike(roll)) {
       handleStrikeHit(list)
    } else if (isSpare(list, roll) && !isFirstRollInFrame(list)) {
        list.push(SPARE_SIGN);
    } else {
        list.push(roll.toString());
    }
}

const handleStrikeHit = (list: string[]) => {
    if (isFirstRollInFrame(list) && list.length !== 20) {
        list.push(EMPTY_SIGN, STRIKE_SIGN);
    } else {
        list.push(SPARE_SIGN);
    }
}
const handleLastFrame = (list: string[], roll: number) => {
    if (isStrike(roll)) {
        list.push(STRIKE_SIGN);
    } else if (!isSpare(list, roll) && !isStrike(roll) && list[18] !== STRIKE_SIGN && list.length === 19) {
        list.push(roll.toString(), EMPTY_SIGN);
    } else {
        list.push(roll.toString());
    }
}

const replaceCharactersWithNumericValue = (list: string[]) => {
    let cleanedList: Array<number> = list
        .filter(element => element !== EMPTY_SIGN)
        .map(item => item.replace(STRIKE_SIGN, '10'))
        .map(item => Number(item))
        .map((item, index, arr) => isNaN(item) ? 10 - arr[index - 1] : item);

    return cleanedList;
}

export { insertRoll, replaceCharactersWithNumericValue, isStrike, isFirstRollInFrame }