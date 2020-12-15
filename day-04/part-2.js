import {
    getContents
} from '../utils/readFile.js';

import {
    isValidPassport
} from './code.js';

let input = getContents('./day-04/cleanedInput.txt').split('\n');

let test = input.filter(item => { return item.split(' ').length >= 7 })

const output = input.filter(data => {
    return isValidPassport({
        entry: data
    });
});

console.log({
    output: output.length,
    test: test.length
});