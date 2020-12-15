import {
    getContents
} from '../utils/readFile.js';

import {
    isValidPassport
} from './code.js';

let input = getContents('./day-04/example.txt').split('\n\n');

const output = input.filter(data => {
    return isValidPassport({
        entry: data
    });
});

console.log({
    output
});