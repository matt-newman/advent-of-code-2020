import {
    getContents
} from '../utils/readFile.js';

import {
    getGroupAnswers
} from './code.js';

let input = getContents('./day-06/example.txt').split('\n\n');
let output = getGroupAnswers({
    input
});

console.log({
    output
});