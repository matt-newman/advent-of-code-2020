// find items that sum...

// multiply

import {
    getContents
} from '../utils/readFile.js';

import {
    getValidPasswords
} from './passwordChecker.js';

let input = getContents('./day-02/input.txt').split('\n');
let items = getValidPasswords({
    input
});

console.log({
    output: items.length
});