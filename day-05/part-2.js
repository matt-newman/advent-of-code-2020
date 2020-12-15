import fs from 'fs';

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

const ids = seats.map(seat => seat.id).sort((a,b) => a - b);
let currentId = 88;
ids.forEach((id) => {
    if( id - currentId !== 1 ) {
        console.log(id);
    }
    currentId++;
})

fs.writeFile('output.txt', ids.join('\n'), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// returns 523 as the first non-match