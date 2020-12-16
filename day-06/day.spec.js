import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getAnswers,
    getGroupAnswerTotals,
    getUniqueGroupAnswers,
    sumGroupAnswers,
    sumUniqueAnswers
} from './code.js';

let input = getContents('./day-06/example.txt').split('\n\n');

describe("day 06", () => {
    describe("example", () => {
        it("should sum the counts correctly", () => {
            const answers = getAnswers( { input } );
            const result = sumUniqueAnswers( answers );
            result.should.equal(11);
        });
    })

    xdescribe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = a({
                input
            });

            result.should.equal(6387);
            // puzzle answer = 6387
        });
    });

    describe("part 2", () => {
        it("example", () => {
            let groups = getAnswers({ input });
            let groupAnswerTotals = getGroupAnswerTotals({groups});
            let result = sumGroupAnswers(groupAnswerTotals);
            result.should.equal(6);
        });

        it("should return the actual answer", () => {
            input = getContents('./day-06/input.txt').split('\n\n');
            let groups = getAnswers({ input });
            let groupAnswerTotals = getGroupAnswerTotals({groups});
            let result = sumGroupAnswers(groupAnswerTotals);
            result.should.equal(3039);
            // puzzle answer = 3039
        });
    });
});