import should from 'should';
import {
    getValidPasswords
} from './passwordChecker.js';

describe("passwordChecker", () => {
    it("should deem a matching password valid", () => {
        let input = [
            '1-3 a: abcde'
        ];
        const result = getValidPasswords({
            input
        });

        result.length.should.equal(1);
    });

    it("should deem a non-matching password invalid", () => {
        let input = [
            '1-3 b: cdefg',
        ];
        const result = getValidPasswords({
            input
        });

        result.length.should.equal(0);
    });

    it("should return the valid entries", () => {
        let input = [
            '1-3 a: abcde',
            '1-3 b: cdefg',
            '2-9 c: ccccccccc'
        ];
        const result = getValidPasswords({
            input
        });

        result.should.deepEqual([
            '1-3 a: abcde',
            '2-9 c: ccccccccc'
        ]);
    });
});