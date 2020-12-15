import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    howManyTrees
} from './code.js';

let input = getContents('./day-03/example.txt').split('\n');

describe("day 03", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = howManyTrees({
                input
            });

            result.should.equal(7);
            // actual puzzle answer = 289
        });
    });

    describe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            let results = [];
            let individualResult = 0;

            individualResult = howManyTrees({
                input,
                x: 1,
                y: 1
            });
            results.push(individualResult);

            individualResult = howManyTrees({
                input,
                x: 3,
                y: 1
            });
            results.push(individualResult);

            individualResult = howManyTrees({
                input,
                x: 5,
                y: 1
            });
            results.push(individualResult);

            individualResult = howManyTrees({
                input,
                x: 7,
                y: 1
            });
            results.push(individualResult);

            individualResult = howManyTrees({
                input,
                x: 1,
                y: 2
            });
            results.push(individualResult);

            const result = results.reduce((prev, curr) => prev * curr);

            result.should.equal(336);
            // puzzle answer is 5522401584
        });
    });
});