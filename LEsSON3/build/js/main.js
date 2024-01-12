"use strict";
let stringArray = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedDAta = ['EVH', 1984, true];
stringArray[0] = 'John';
stringArray.push('hey');
guitars[0] = 1984;
console.log(stringArray);
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple[1] = 42;
// Objects 
let myObj;
myObj = [];
console.log(typeof myObj);
