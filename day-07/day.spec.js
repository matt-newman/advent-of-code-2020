import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getBagData, getBagsContainingBag, getListOfPossibleContainersOfBag
} from './code.js';

let input = getContents('./day-07/example.txt').split('\n');

describe("day 07", () => {

    describe("part 1", () => {
        //in this example, the number of bag colors that can eventually contain at least one shiny gold bag is 4
        it("should give the correct answer for the example", () => {
            const bagData = getBagData({
                input
            });

            const result = getListOfPossibleContainersOfBag({bagData, target:'shiny_gold'});
            result.length.should.equal(4);
        });

        it("should return the correct answer for the problem", () => {
            const result = a({
                input
            });

            result.should.equal(-2);
            // puzzle answer = 126
        });
    });

    xdescribe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = b({
                input
            });

            result.should.equal(-2);
        });
    });

});