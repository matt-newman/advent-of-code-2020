import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    run
} from './code.js';

let input = getContents('./day-08/example.txt').split('\n');

describe("day 8", () => {
    describe("part 1", () => {
        it("should return the answer for the example", () => {
            const result = run({
                program: input
            });

            result.accumulator.should.equal(5);
        });

        xit("should solve the puzzle", () => {
            input = getContents('./day-08/input.txt').split('\n');
            const result = run({
                program: input
            });

            result.accumulator.should.equal(1446);
        });
    });

    xdescribe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = b({
                input
            });

            result.should.equal(-2);
        });
    });
});