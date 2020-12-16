import {
    getContents
} from '../utils/readFile.js';

import {
    getListOfPossibleContainersOfBag,
    getBagData
} from './code.js';

import util from 'util';

let input = getContents('./day-07/input.txt').split('\n');

let bagData = getBagData({
    input
});

let output = getListOfPossibleContainersOfBag({
    bagData,
    target: 'shiny_gold'
});

console.log(util.inspect(output, {
    showHidden: false,
    depth: null
}));

console.log(output.length)