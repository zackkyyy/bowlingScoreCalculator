package com.code.server.service;

import java.util.ArrayList;
import java.util.List;

public class CalculatorService {
    private int FRAMES_COUNT = 10;
    private int STRIKE_VALUE = 10;
    public static int MAX_ROLLS_ALLOWED = 21;

    public int calculateNewScore(List<Integer> frames) {
        int score = 0;
        int pointer = 0;

        List<Integer> historicRolls = new ArrayList<>(frames);

        if (historicRolls.size() < MAX_ROLLS_ALLOWED) { // fill with zeros when game is not yet completed
            for (int i = historicRolls.size(); i < MAX_ROLLS_ALLOWED; i++) {
                historicRolls.add(0);
            }
        }

        for (int frame = 0 ; frame < FRAMES_COUNT; frame++) {
            int current = historicRolls.get(pointer);
            int next = historicRolls.get(pointer + 1);
            int secondNext = historicRolls.get(pointer + 2);

            if(isStrike(current)) {
                score+= STRIKE_VALUE + next + secondNext;
                pointer++;
            }
            else if (isSpare(current, next)) {
                score += STRIKE_VALUE + secondNext;
                pointer += 2;
            }
            else {
                score += current + next;
                pointer += 2;
            }
        }
        return score;
    }

    private boolean isStrike (int str) {
       return str == STRIKE_VALUE;
    }

    private boolean isSpare (int firstRoll, int secondRoll) {
        return firstRoll + secondRoll == STRIKE_VALUE;
    }
}
