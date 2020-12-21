import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    findInvalidNumber, getWeakness
} from './code.js';

let input = getContents('./day-09/example.txt').split('\n');

describe("day 09", () => {
    describe("part 1", () => {
        it("should solve the example", () => {
            const result = findInvalidNumber({
                input,
                size: 5,
            });

            result.invalidNumber.should.equal(127);
        });

        xit("should solve the puzzle", () => {
            input = getContents('./day-09/input.txt').split('\n');
            const result = findInvalidNumber({
                input,
                size: 25,
            });

            result.invalidNumber.should.equal(1212510616);
        });
    });

    describe("part 2", () => {
        it("should solve the example", () => {
            const invalidNumber = findInvalidNumber({
                input,
                size: 5,
            }).invalidNumber;
            const weakness = getWeakness({input, invalidNumber});

            weakness.should.equal(62);
        });

        xit("should solve the puzzle", () => {
            input = getContents('./day-09/input.txt').split('\n');
            const invalidNumber = findInvalidNumber({
                input,
                size: 25,
            }).invalidNumber;
            const weakness = getWeakness({input, invalidNumber});

            weakness.should.equal(171265123);
        });
    });
});