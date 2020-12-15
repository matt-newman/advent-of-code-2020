import should from 'should';
import {
    getSeat,
    getSeatId
} from '../day-0/code.js';

import {
    getContents
} from '../utils/readFile.js';

import {
    a
} from './code.js';

let input = getContents('./day-05/example.txt').split('\n');

describe("day 05", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = getSeat({
                input
            });

            result.should.deepEqual({
                row: 44,
                column: 5
            });
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