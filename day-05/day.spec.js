import should from 'should';

import {
    getContents
} from '../utils/readFile.js';

import {
    getAllSeats,
    getSeat,
    getSeatId,
    getHighestSeatId,
} from '../day-0/code.js';

let input = getContents('./day-05/example.txt').split('\n');

describe("day 05", () => {

    describe("part 1", () => {
        it("should return the correct answer matching the example", () => {
            const result = getSeat({
                input: input[0]
            });

            result.should.deepEqual({
                row: 44,
                column: 5,
                id: 357
            });
        });

        it("should return the correct answer matching the example", () => {
            const seat = getSeat({
                input: input[0]
            });

            const result = getSeatId(seat);

            result.should.equal(357); // the seat has ID 44 * 8 + 5 = 357
        });

        it("should return a full set of seat data", () => {
            const result = getAllSeats({
                input
            });

            result.should.deepEqual(
                [
                    { row: 44, column: 5, id: 357 },
                    { row: 70, column: 7, id: 567 },
                    { row: 14, column: 7, id: 119 },
                    { row: 102, column: 4, id: 820 },
                ]
            );
        });

        it("should find the highest seatId", () => {
            const seats = getAllSeats({
                input
            });

            const result = getHighestSeatId( { seats } );

            result.should.equal(820);
            // puzzle answer = 888
        });
    });

    xdescribe("part 2", () => {
        it("should return the correct answer matching the example", () => {
            const result = b({
                input
            });

            result.should.not.deepEqual([]);
            // puzzle answer = 522
        });
    });

});