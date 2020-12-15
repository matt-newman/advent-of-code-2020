import {
    getContents
} from '../utils/readFile.js';

import {
    howManyTrees
} from './code.js';

let input = getContents('./day-03/input.txt').split('\n');

let slopes = [
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 1 }
];

let output = slopes.reduce( ( acc, current ) => {
    let { x, y } = current;
    return acc * howManyTrees({ input, x, y });
}, 1);

console.log({
    output
});