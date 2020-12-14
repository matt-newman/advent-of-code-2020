// find items that sum...

// multiply

import {
    getContents
} from '../utils/readFile.js';

import {
    sumItems
} from './sumItems.js';

const input = getContents('./day-01/input.1.txt').split('\n');

const numericInput = input.map(x => parseInt(x));
const target = 2020;

let items;

numericInput.forEach((item) => {
    let remainder = (target - item);
    
    numericInput.filter( x => x < remainder ).forEach( innerItem => {
        let thirdNumber = remainder - innerItem;
        let found = numericInput.includes( thirdNumber );

        if( found ) {
            items = [item, innerItem, thirdNumber];
        }
    } );
});

const output = sumItems(items);

console.log(output);