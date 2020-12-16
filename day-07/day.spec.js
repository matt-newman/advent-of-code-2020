import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    a
} from './code.js';

let input = getContents('./day-07/example.txt').split('\n');

describe("day 07", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = a({
                input
            });

            result.should.not.deepEqual([]);
        });
    });

    xdescribe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = b({
                input
            });

            result.should.not.deepEqual([]);
        });
    });

});