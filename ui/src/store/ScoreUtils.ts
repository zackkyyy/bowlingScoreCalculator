export const STRIKE_SIGN = 'X', SPARE_SIGN = '/', EMPTY_SIGN = ' ', MAX_ROLLS_ALLOWED = 21, STRIKE_VALUE = 10;

const isLastFrame = (list: string[]) : boolean => list.length > 17;
const isSpare = (list: string[], int: number) : boolean => Number(list[list.length - 1]) + int === STRIKE_VALUE;
const isStrike = (roll: number) : boolean => roll === STRIKE_VALUE;
const isFirstRollInFrame = (list: string[]) : boolean => list.length % 2 === 0;

const insertRoll = (list: string[], roll: number) : string[] => {
    let newList : string[] = [...list];
    if (isLastFrame(newList)) {
        handleLastFrame(newList, roll)
    } else if (isStrike(roll)) {
        handleStrikeHit(newList)
    } else if (isSpare(newList, roll) && !isFirstRollInFrame(newList)) {
        newList.push(SPARE_SIGN);
    } else {
        newList.push(roll.toString());
    }
    return newList;
}

const handleStrikeHit = (list: string[]) => {
    if (isFirstRollInFrame(list)) {
        list.push(EMPTY_SIGN, STRIKE_SIGN);
    } else {
        list.push(SPARE_SIGN);
    }
}
const handleLastFrame = (list: string[], roll: number) : void => {
    if (isStrike(roll)) {
        list.push(STRIKE_SIGN);
    } else if (!isSpare(list, roll) && !isStrike(roll) && list[18] !== STRIKE_SIGN && list.length === 19) {
        list.push(roll.toString(), EMPTY_SIGN);
    } else {
        list.push(roll.toString());
    }
}

const replaceCharactersWithNumericValue = (list: string[]) : number[] => {
    let cleanedList: number[] = list
        .filter(element => element !== EMPTY_SIGN)
        .map(item => item.replace(STRIKE_SIGN, '10'))
        .map(item => Number(item))
        .map((item, index, arr) => isNaN(item) ? STRIKE_VALUE - arr[index - 1] : item);

    return cleanedList;
}

export { insertRoll, replaceCharactersWithNumericValue, isStrike, isFirstRollInFrame }