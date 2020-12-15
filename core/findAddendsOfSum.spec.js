import should from 'should';

import {
    findItemsThatSumToTarget
} from '../core/findTermsOfTarget.js';

describe("findItemsThatSumToTarget", () => {
    it("should be able to sum entries in an array to find the ones that equal the given target", () => {
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

    it("should find the matching items regardless of order", () => {
        let input = [
            '1',
            '2',
            '3',
            '4'
        ];
        let result = findItemsThatSumToTarget(input, 4);

        result.should.deepEqual([1, 3]);
    });
});