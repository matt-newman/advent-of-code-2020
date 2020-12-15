import should from 'should';
import {
    getOldValidPasswords,
    getCurrentValidPasswords
} from './passwordChecker.js';

describe("day 2", () => {
    let input = [
        '1-3 a: abcde',
        '1-3 b: cdefg',
        '2-9 c: ccccccccc'
    ];

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = getOldValidPasswords({
                input
            });

            result.length.should.equal(2);
            // actual puzzle answer = 515
        });
    });

    describe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = getCurrentValidPasswords({
                input
            });

            result.length.should.equal(1);
            // actual puzzle answer = 711
        });
    });
});