package com.code.server.service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class CalculatorService {
    private int FRAMES_COUNT = 10;
    private int MAX_LENGTH = 21;
    private int STRIKE_VALUE = 10;

    public int calculateNewScore(List<Integer> frames) {
        int score = 0;
        int pointer = 0;

        List<Integer> historicRolls = new ArrayList<>(frames);

        if (historicRolls.size() < MAX_LENGTH ) { // fill with zeros when game is not yet completed
            for (int i = historicRolls.size(); i < MAX_LENGTH; i++) {
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
            else if (current + next == STRIKE_VALUE) {
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
       return str == 10;
    }

}
