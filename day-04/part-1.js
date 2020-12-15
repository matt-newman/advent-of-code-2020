import {
    getContents
} from '../utils/readFile.js';

import {
    isValidPassport
} from './code.js';

let input = getContents('./day-04/input.txt').split('\n\n');

const output = input.filter(entry => {
    return isValidPassport({
        entry
    });
});

console.log({
    output: output.length
});