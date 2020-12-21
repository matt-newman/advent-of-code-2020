import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    runProgram
} from './code.js';

let input = getContents('./day-09/example.txt').split('\n');

describe("day 09", () => {
    describe("part 1", () => {
        it("should solve the example", () => {
            const result = runProgram({
                input,
                size: 5,
            });

            result.target.should.equal(127);
        });

        xit("should solve the puzzle", () => {
            const result = a({
                input
            });

            result.should.equal(-2);
        });
    });

    xdescribe("part 2", () => {
        it("should solve the example", () => {
            const result = a({
                input
            });

            result.should.equal(-2);
        });

        xit("should solve the puzzle", () => {
            const result = a({
                input
            });

            result.should.equal(-2);
        });
    });
});