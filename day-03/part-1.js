import {
    getContents
} from '../utils/readFile.js';

import {
    howManyTrees
} from './code.js';

let input = getContents('./day-03/input.txt').split('\n');
let output = howManyTrees({
    input
});

console.log({
    output
});