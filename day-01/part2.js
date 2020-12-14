// find items that sum...

// multiply

import {
    getContents
} from '../utils/readFile.js';

import {
    findThreeThatSumToTarget
} from '../core/findItemsThatSumToTarget.js';

import {
    sumItems
} from './sumItems.js';

const input = getContents('./day-01/input.1.txt').split('\n');

const items = findThreeThatSumToTarget({
    input
});

const output = sumItems(items);

console.log( { output } );