import should from 'should';

import {
    findPairThatSumToTarget,
    findThreeThatSumToTarget
} from '../core/findItemsThatSumToTarget.js';
import {
    sumItems
} from './sumItems.js';

describe("day 1", () => {

    describe("part 1", () => {
        it("should be able to find a pair of numbers in an array that equal a target", () => {
            let input = [
                '1721',
                '979',
                '366',
                '299',
                '675',
                '1456'
            ];
            const items = findPairThatSumToTarget({
                input,
                target: 2020
            });
            const result = sumItems(items);

            result.should.equal(1721 * 299);
        });
    });

    describe("part 2", () => {
        it("should be able to sum 3 items from a list that equal a target", () => {
            let input = [
                '1721',
                '979',
                '366',
                '299',
                '675',
                '1456'
            ];
            const items = findThreeThatSumToTarget({
                input,
                target: 2020
            });
            const result = sumItems(items);

            result.should.equal(979 * 366 * 675);
        });
    });
});