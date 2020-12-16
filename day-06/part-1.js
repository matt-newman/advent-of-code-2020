import {
    getContents
} from '../utils/readFile.js';

import {
    getGroupAnswers, sumUniqueAnswers
} from './code.js';

let input = getContents('./day-06/input.txt').split('\n\n');
let answers = getGroupAnswers({
    input
});
let output = sumUniqueAnswers( answers );

console.log({
    output
});