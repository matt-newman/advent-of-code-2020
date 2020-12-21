import {
    getContents
} from '../utils/readFile.js';

import {
    findInvalidNumber,
    getWeakness,
} from './code.js';

let input = getContents('./day-09/input.txt').split('\n');

let invalidNumber = findInvalidNumber({
    input,
    size: 25,
}).invalidNumber;

let output = getWeakness( { input, invalidNumber });

console.log({
    output
});