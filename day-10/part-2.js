import {
    getContents
} from '../utils/readFile.js';

import {
    getAllJoltageAdapters,
    getPossibleArrangements,
} from './code.js';

let input = getContents('./day-10/example-2.txt').split('\n');
let clusters = getPossibleArrangements({
    input
});

let totals = clusters.map( cluster => {
    if( cluster === 3 ) {
        return 2;
    }
    if ( cluster === 4 ) {
        return 4;
    }
    return Math.pow(4, cluster - 3);
});

let output = totals.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log({
    output: totals
});