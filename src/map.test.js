import { ourMap } from "./map.js";
import { test, expect } from "@jest/globals";

test("double number array", () => {
    expect(ourMap([1, 2, 3, 4], f => f * 2)).toEqual([2, 4, 6, 8]);
});

test("double string array", () => {
    const upperCase = string => string.toUpperCase()
    expect(ourMap(["h" , "e" , "l", "l", "o", "pamela"], upperCase)).toEqual(["H", "E", "L", "L", "O", "PAMELA"]);
});
