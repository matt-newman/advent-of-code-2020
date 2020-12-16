import {
    getContents
} from '../utils/readFile.js';

import {
    getAnswers, getGroupAnswerTotals, sumGroupAnswers
} from './code.js';

let input = getContents('./day-06/input.txt').split('\n\n');
let groups = getAnswers({
    input
});

let groupAnswerTotals = getGroupAnswerTotals({groups});

let output = sumGroupAnswers(groupAnswerTotals);

console.log({
    output: output
});