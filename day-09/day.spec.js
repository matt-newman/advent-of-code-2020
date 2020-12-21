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

        it("should solve the puzzle", () => {
            input = getContents('./day-09/input.txt').split('\n');
            const result = runProgram({
                input,
                size: 25,
            });

            result.target.should.equal(1212510616);
        });
    });

    describe("part 2", () => {
        it("should solve the example", () => {
            const result = runProgram({
                input,
                size: 5,
            });

            result.weakness.should.equal(62);
        });

        xit("should solve the puzzle", () => {
            const result = a({
                input
            });

            result.should.equal(-2);
        });
    });
});