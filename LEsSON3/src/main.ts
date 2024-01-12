let stringArray =  ['one', 'hey', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedDAta = ['EVH', 1984, true]

stringArray[0] = 'John'
stringArray.push('hey')
guitars[0] = 1984

console.log(stringArray)
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple

let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

mixed = myTuple

myTuple[1] = 42

// Objects 

let myObj: object
myObj = []
console.log(typeof myObj)