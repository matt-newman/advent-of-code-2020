import should from 'should';
import {
    getOldValidPasswords,
    getCurrentValidPasswords,
} from './passwordChecker.js';

describe("passwordChecker", () => {

    describe('getOldValidPasswords', () => {
        it("should deem a matching password valid", () => {
            let input = [
                '1-3 a: abcde'
            ];
            const result = getOldValidPasswords({
                input
            });

            result.length.should.equal(1);
        });

        it("should deem a non-matching password invalid", () => {
            let input = [
                '1-3 b: cdefg',
            ];
            const result = getOldValidPasswords({
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
            const result = getOldValidPasswords({
                input
            });

            result.should.deepEqual([
                '1-3 a: abcde',
                '2-9 c: ccccccccc'
            ]);
        });
    });

    describe('getCurrentValidPasswords', () => {
        it("should deem a matching password valid", () => {
            let input = [
                '1-3 a: abcde',
            ];
            const result = getCurrentValidPasswords({
                input
            });

            result.length.should.equal(1);
        });

        it("should deem a non-matching password invalid", () => {
            let input = [
                '1-3 b: cdefg',
                '2-9 c: ccccccccc'
            ];
            const result = getCurrentValidPasswords({
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
            const result = getCurrentValidPasswords({
                input
            });

            result.should.deepEqual([
                '1-3 a: abcde'
            ]);
        });
    })
});