import should from 'should';

import {
    findItemsThatSumToTarget
} from '../core/findItemsThatSumToTarget.js';
import {
    sumItems
} from './sumItems.js';

describe("day 1", () => {

    describe("part 1", () => {
        it("should be able to sum entries in a list to find the ones that equal 2020", () => {
            let input = [
                '1721',
                '979',
                '366',
                '299',
                '675',
                '1456'
            ];
            const items = findItemsThatSumToTarget(input, 2020);
            const result = sumItems( items );

            result.should.equal(1721 * 299);
        });
    });

    describe("part 2", () => {
        it("should be able to sum entries in a list to find the ones that equal 2020", () => {
            let input = [
                '1721',
                '979',
                '366',
                '299',
                '675',
                '1456'
            ];
            const items = findItemsThatSumToTarget(input, 2020);
            const result = sumItems( items );

            result.should.equal(241861950);
        });
    });
});