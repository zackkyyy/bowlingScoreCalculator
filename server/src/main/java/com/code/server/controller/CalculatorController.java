package com.code.server.controller;
import com.code.server.service.CalculatorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static com.code.server.service.CalculatorService.MAX_ROLLS_ALLOWED;

@RestController
@CrossOrigin(origins = "*")
public class CalculatorController {

    @RequestMapping(value = "/calculate", method = RequestMethod.POST)
    @ResponseBody
    public int calculate(@RequestBody List<Integer> frames) {
        if (frames.size() > MAX_ROLLS_ALLOWED) {
            throw new IllegalArgumentException("Rolls should be max 21");
        }
        CalculatorService service = new CalculatorService();
        return service.calculateNewScore(frames);
    }
}
