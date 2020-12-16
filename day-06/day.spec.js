import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getGroupAnswers
} from './code.js';

let input = getContents('./day-06/example.txt').split('\n');

describe("day 06", () => {
    describe("example", () => {
        it("should sum the counts correctly", () => {
            const result = getGroupAnswers( { input } );
            result.should.equal(11);
        });
    })

    xdescribe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = a({
                input
            });

            result.should.not.deepEqual([]);
        });
    });

    xdescribe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = b({
                input
            });

            result.should.not.deepEqual([]);
        });
    });
});