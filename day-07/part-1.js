import {
    getContents
} from '../utils/readFile.js';

import {
    getBagData
} from './code.js';

let input = getContents('./day-07/example.txt').split('\n');

let output = getBagData({
    input
});

console.log({
    output
});