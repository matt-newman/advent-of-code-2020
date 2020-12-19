import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getBagData, getBagsContainingBag, getListOfPossibleContainersOfBag, getNestedContents, getNestedSum
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

        xit("should return the correct answer for the problem", () => {
            let bagData = getBagData({
                input
            });
            
            let result = getListOfPossibleContainersOfBag({
                bagData,
                target: 'shiny_gold'
            });

            result.length.should.equal(126);
            // puzzle answer = 126
        });
    });

    describe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const data = getBagData({
                input
            });
            const nestedBags = getNestedContents({ bags: data, start: 'shiny_gold' });
            const result = getNestedSum( { bag: nestedBags } );

            result.should.equal(32);
        });

        xit("should solve the puzzle", () => {
            input = getContents('./day-07/input.txt').split('\n');
            const data = getBagData({
                input
            });
            const nestedBags = getNestedContents({ bags: data, start: 'shiny_gold' });
            const result = getNestedSum( { bag: nestedBags } );

            result.should.equal(220149);
        });
    });

});