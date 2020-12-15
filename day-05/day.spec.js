import should from 'should';
import {
    a
} from './code.js';

describe("day 05", () => {
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