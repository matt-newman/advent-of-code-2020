import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getSeat,
    getSeatId
} from '../day-0/code.js';

let input = getContents('./day-05/example.txt').split('\n');

describe("day 05", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = getSeat({
                input: input[0]
            });

            result.should.deepEqual({
                row: 44,
                column: 5
            });
        });

        it("should return the correct answer matching the example", () => {
            const seat = getSeat({
                input: input[0]
            });

            const result = getSeatId( { seat } );

            result.should.equal(357);

            // the seat has ID 44 * 8 + 5 = 357
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