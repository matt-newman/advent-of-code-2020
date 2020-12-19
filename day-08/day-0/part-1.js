import {
    getContents
} from '../utils/readFile.js';

import {
    a
} from './code.js';

let input = getContents('./day-0/input.txt').split('\n');
let output = a({
    input
});

console.log({
    output
});