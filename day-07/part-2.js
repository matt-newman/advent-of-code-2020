import {
    getContents
} from '../utils/readFile.js';

import {
    getBagData,
    getNestedContents,
} from './code.js';

import util from 'util';

let input = getContents('./day-07/example.txt').split('\n');

let bags = getBagData({
    input
});

let output = getNestedContents( { bags, target: 'shiny_gold' } );

// TODO: sum the nested tree

console.log(util.inspect(output, {
    showHidden: false,
    depth: null
}));

console.log(output.length);