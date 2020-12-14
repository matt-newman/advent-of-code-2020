// find items that sum...

// multiply

import {
    getContents
} from '../utils/readFile.js';

import {
    findPairThatSumToTarget
} from '../core/findPairThatSumToTarget.js';

import {
    sumItems
} from './sumItems.js';

let input = getContents('./day-01/input.1.txt').split('\n');

let items = findPairThatSumToTarget(input);

let output = sumItems(items);

console.log( { output } );