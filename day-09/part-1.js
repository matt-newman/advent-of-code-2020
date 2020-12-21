import {
    getContents
} from '../utils/readFile.js';

import {
    a
} from './code.js';

let input = getContents('./day-09/example.txt').split('\n');

let output = a({
    input
});

console.log({
    output
});