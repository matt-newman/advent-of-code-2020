import {
    getContents
} from '../utils/readFile.js';

import {
    getCurrentValidPasswords
} from './passwordChecker.js';

let input = getContents('./day-02/input.txt').split('\n');
let items = getCurrentValidPasswords({
    input
});

console.log({
    output: items.length
});