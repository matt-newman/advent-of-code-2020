import should from 'should';
import {
    numberOfValidPassports
} from './code.js';
import {
    getContents
} from '../utils/readFile.js';

let input = getContents('./day-04/example.txt').split('\n\n'); // important take note of: '\n\n'

describe("day 04", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = numberOfValidPassports({
                input
            });

            result.should.equal(2);
            // puzzle answer = 233
        });
    });

    describe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = numberOfValidPassports({
                input
            });

            result.should.equal(2);
            // puzzle answer = 111
        });
    });
});