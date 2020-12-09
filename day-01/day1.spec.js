import should from 'should';

import {
    findItemsThatSumToTarget
} from '../core/findItemsThatSumToTarget.js';
// import { output } from "./index.js";

describe("day 1", () => {

    describe("part 1", () => {
        it("should be able to sum entries in a list to find the ones that equal 2020", () => {
            let input = [
                1721,
                979,
                366,
                299,
                675,
                1456
            ];
            let result = findItemsThatSumToTarget(input, 2020);

            result.should.deepEqual([1721, 299]);
        });
    });

    describe("part 2", () => {});
});