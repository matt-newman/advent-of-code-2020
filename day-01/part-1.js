// find items that sum...

// multiply

import {
    getContents
} from '../utils/readFile.js';

import {
    findPairThatSumToTarget
} from '../core/findAddendsOfSum.js';

import {
    sumItems
} from './sumItems.js';

let input = getContents('./day-01/input.txt').split('\n');

let items = findPairThatSumToTarget({
    input
});

// console.log({
//     input,
//     items
// });

let output = sumItems(items);

console.log( { output } );