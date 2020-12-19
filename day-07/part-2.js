import {
    getContents
} from '../utils/readFile.js';

import {
    getBagData,
    getNestedContents,
    getNestedSum,
} from './code.js';

import util from 'util';

let input = getContents('./day-07/input.txt').split('\n');

let bags = getBagData({
    input
});

let output = getNestedContents( { bags, target: 'shiny_gold' } );

const result = getNestedSum( { bag: output } );

// console.log(util.inspect(output, {
//     showHidden: false,
//     depth: null
// }));

console.log( { result } );