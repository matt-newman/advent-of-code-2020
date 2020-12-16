import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    a
} from './code.js';

let input = getContents('./day-X/example.txt').split('\n');

xdescribe("day X", () => {
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