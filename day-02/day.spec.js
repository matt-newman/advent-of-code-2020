import should from 'should';
import {
    getValidPasswords
} from './passwordChecker.js';

describe("day 2", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            let input = [
                '1-3 a: abcde',
                '1-3 b: cdefg',
                '2-9 c: ccccccccc'
            ];
            const result = getValidPasswords({
                input
            });

            result.length.should.equal(2);
        });
    });

    describe("part 2", () => {
        xit("should return the correct answer matching the example", () => {
            const result = getValidPasswords({
                input
            });
            result.should.equal(1000);
        });
    });
});