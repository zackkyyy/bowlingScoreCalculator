package com.code.server.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.List;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

class CalculatorServiceTest {

    private CalculatorService service;

    @BeforeEach
    private void setUp() {
        service = new CalculatorService();
    }

    @Test
    void TestStrikeFollowedBySpare() {
        List<Integer> frames = List.of(10, 5, 5, 4, 0);
        int score =  service.calculateNewScore(frames);
        assertThat(score, is(38));
    }
    @Test
    void calculateNewScoreInBetween() {
        List<Integer> frames = List.of(1, 2, 10);
        int score =  service.calculateNewScore(frames);
        assertThat(score, is(13));
    }

    @Test
    void testPerfectStrike() {
        List<Integer> frames = List.of(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10);
        int score =  service.calculateNewScore(frames);
        assertThat(score, is(300));
    }

    @Test
    void testAllSpares() {
        List<Integer> frames = List.of(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,10);
        int score =  service.calculateNewScore(frames);
        assertThat(score, is(155));
    }

    @Test
    void testSpareWith10() {
        List<Integer> frames = List.of(0, 0, 5, 5, 10, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        int score =  service.calculateNewScore(frames);
        assertThat(score, is(44));
    }
    @Test
    void testEmpty() {
        List<Integer> frames = List.of();
        int score =  service.calculateNewScore(frames);
        assertThat(score, is(0));
    }

}
