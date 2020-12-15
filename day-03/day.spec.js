import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    a,
    b
} from './code.js';

let input = getContents('./day-03/example.txt').split('\n');

describe("day 03", () => {
    let input = [];

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = a({
                input
            });

            result.should.not.deepEqual([]);
        });
    });

    describe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = b({
                input
            });

            result.should.not.deepEqual([]);
        });
    });
});