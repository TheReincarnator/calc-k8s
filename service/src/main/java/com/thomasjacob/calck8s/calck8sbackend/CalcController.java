package com.thomasjacob.calck8s.calck8sbackend;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CalcController {

    @RequestMapping(value = "/add", method = {RequestMethod.POST, RequestMethod.GET})
    public CalculationResult add(@RequestParam(name="a") String a, @RequestParam(name="b") String b)
    {
        int aInt = Integer.parseInt(a);
        int bInt = Integer.parseInt(b);
        return new CalculationResult(String.valueOf(aInt + bInt));
    }

    @RequestMapping(value = "/subtract", method = {RequestMethod.POST, RequestMethod.GET})
    public CalculationResult subtract(@RequestParam(name="a") String a, @RequestParam(name="b") String b)
    {
        int aInt = Integer.parseInt(a);
        int bInt = Integer.parseInt(b);
        return new CalculationResult(String.valueOf(aInt - bInt));
    }

    @RequestMapping(value = "/multiply", method = {RequestMethod.POST, RequestMethod.GET})
    public CalculationResult multiply(@RequestParam(name="a") String a, @RequestParam(name="b") String b)
    {
        int aInt = Integer.parseInt(a);
        int bInt = Integer.parseInt(b);
        return new CalculationResult(String.valueOf(aInt * bInt));
    }

    @RequestMapping(value = "/divide", method = {RequestMethod.POST, RequestMethod.GET})
    public CalculationResult divide(@RequestParam(name="a") String a, @RequestParam(name="b") String b)
    {
        int aInt = Integer.parseInt(a);
        int bInt = Integer.parseInt(b);
        return new CalculationResult(String.valueOf(aInt / bInt));
    }

}
