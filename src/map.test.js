import { ourMap } from "./map.js";
import { test, expect } from "@jest/globals";

const spells = [
    {
      "incantation": "Accio",
      "effect": "Summons an object",
      "type": "Charm"
    },
    {
      "incantation": "Aguamenti",
      "effect": "Shoots water from wand",
      "type": "Charm"
    },
    {
      "incantation": "Alohomora",
      "effect": "Opens locked objects",
      "type": "Charm"
    }
];

const array = ["h" , "e" , "l", "l", "o", "pAm", "PAUL", "hElLo WoRlD"]

test("double number array", () => {
    const double = num => num * 2
    expect(ourMap([1, 2, 3, 4], double)).toEqual([2, 4, 6, 8]);
});


test("upper case array", () => {
    const upperCase = string => string.toUpperCase()
    expect(ourMap(array, upperCase)).toEqual(["H", "E", "L", "L", "O", "PAM", "PAUL", "HELLO WORLD"]);
});

test("lower case array", () => {
    const lowerCase = string => string.toLowerCase()
    expect(ourMap(array, lowerCase)).toEqual(["h" , "e" , "l", "l", "o", "pam", "paul", "hello world"]);
});


test("return object value", () => {
    const returnIncantation = spell => spell.incantation
    expect(ourMap(spells, returnIncantation)).toEqual(["Accio", "Aguamenti", "Alohomora"]);
});

test("return object value", () => {
    const returnType = spell => spell.type
    expect(ourMap(spells, returnType)).toEqual(["Charm", "Charm", "Charm"]);
});

test("return string backwards and joined", () => {
    const makeDetails = str => ({original: str, backwards: str.split("").reverse().join("")})
    expect(ourMap(["hi", "hello"], makeDetails)).toEqual([{"backwards": "ih", "original": "hi"},
     {"backwards": "olleh","original": "hello"}]);
});