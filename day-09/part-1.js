import {
    getContents
} from '../utils/readFile.js';

import {
    runProgram
} from './code.js';

let input = getContents('./day-09/input.txt').split('\n');

let output = runProgram({
    input,
    size: 25,
});

console.log({
    output
});