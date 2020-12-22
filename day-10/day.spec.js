import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getAllJoltageAdapters,
} from './code.js';

let input = getContents('./day-10/example.txt').split('\n');

describe("day 10", () => {
    describe("part 1", () => {
        it("should solve the first example", () => {
            const result = getAllJoltageAdapters({
                input
            });

            result.should.deepEqual( { one: 7, three: 5 } );
        });

        it("should solve the second example", () => {
            input = getContents('./day-10/example-2.txt').split('\n');
            const result = getAllJoltageAdapters({
                input
            });

            result.should.deepEqual( { one: 22, three: 10 } );
        });

        it("should solve the puzzle", () => {
            input = getContents('./day-10/input.txt').split('\n');
            const output = getAllJoltageAdapters({
                input
            });

            const result = output.one * output.three;

            result.should.equal( 2664 ); // 72 * 37 = 2664
        });
    });

    describe("part 2", () => {
        it("should solve the first example", () => {
            const result = getAllJoltageAdapters({
                input
            });

            result.should.equal( 8 );
        });

        it("should solve the second example", () => {
            input = getContents('./day-10/example-2.txt').split('\n');
            const result = getAllJoltageAdapters({
                input
            });

            result.should.equal( 19208 );
        });
    });
});