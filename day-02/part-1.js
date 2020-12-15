import {
    getContents
} from '../utils/readFile.js';

import {
    getOldValidPasswords
} from './passwordChecker.js';

let input = getContents('./day-02/input.txt').split('\n');
let items = getOldValidPasswords({
    input
});

console.log({
    output: items.length
});