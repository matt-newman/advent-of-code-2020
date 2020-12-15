import {
    getContents
} from '../utils/readFile.js';

import {
    getAllSeats,
    getHighestSeatId
} from './code.js';

const input = getContents('./day-05/input.txt').split('\n');

const seats = getAllSeats({
    input
});

const output = getHighestSeatId( { seats } );

console.log({
    output
});