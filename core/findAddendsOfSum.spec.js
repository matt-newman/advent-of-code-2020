import should from 'should';

import {
    findPairThatSumToTarget
} from '../core/findAddendsOfSum.js';

describe("findPairThatSumToTarget", () => {
    it("should be able to sum entries in an array to find the ones that equal the given target", () => {
        let input = [
            1721,
            979,
            366,
            299,
            675,
            1456
        ];
        let result = findPairThatSumToTarget( { input, target:2020 });

        result.should.deepEqual([1721, 299]);
    });

    it("should find the matching items regardless of order", () => {
        let input = [
            '1',
            '2',
            '3',
            '4'
        ];
        let result = findPairThatSumToTarget( { input, target:4 });

        result.should.deepEqual([1, 3]);
    });
});