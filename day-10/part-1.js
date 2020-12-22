import {
    getContents
} from '../utils/readFile.js';

import {
    getAllJoltageAdapters,
} from './code.js';

let input = getContents('./day-10/example.txt').split('\n');
let output = getAllJoltageAdapters({
    input
});

console.log({
    output
});