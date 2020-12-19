import {
    getContents
} from '../utils/readFile.js';

import {
    run
} from './code.js';

let input = getContents('./day-08/input.txt').split('\n');
let output = run({
    program: input
});

console.log({
    output
});