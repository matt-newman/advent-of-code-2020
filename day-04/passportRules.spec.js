import should from 'should';
import {
    getContents
} from '../utils/readFile.js';

import {
    isValidPassport
} from './code.js';

const validExamples = getContents('./day-04/validExamples.txt').split('\n\n'); // important take note of: '\n\n'
const invalidExamples = getContents('./day-04/invalidExamples.txt').split('\n\n'); // important take note of: '\n\n'

describe("isValidPassport", () => {

    describe("examples", () => {
        it("should return true for all the valid examples", () => {
            const result = validExamples.every(example => isValidPassport({
                entry: example
            }));

            result.should.equal(true);
        });

        it("should return false for all the invalid examples", () => {
            const result = invalidExamples.some(example => isValidPassport({
                entry: example
            }));

            result.should.equal(false);
        });
    });

    describe("byr", () => {
        it("four digits; at least 1920 and at most 2002", () => {
            const altered = validExamples.slice();
            const regex = /byr:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['byr:2003 ', 'byr:1919 '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

    describe("iyr", () => {
        it("four digits; at least 2010 and at most 2020", () => {
            const altered = validExamples.slice();
            const regex = /iyr:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['iyr:2009 ', 'iyr:2021 '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

    describe("hgt", () => {
        it("a number followed by either cm or in. If cm, the number must be at least 150 and at most 193. If in, the number must be at least 59 and at most 76.", () => {
            const altered = validExamples.slice();
            const regex = /hgt:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['hgt:190in ', 'hgt:190 '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

    describe("eyr", () => {
        it("four digits; at least 2020 and at most 2030", () => {
            const altered = validExamples.slice();
            const regex = /eyr:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['eyr:2019 ', 'eyr:2031 '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

    describe("hcl", () => {
        it("a # followed by exactly six characters 0-9 or a-f", () => {
            const altered = validExamples.slice();
            const regex = /hcl:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['hcl:#123abz ', 'hcl:123abc '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

    describe("ecl", () => {
        it("exactly one of: amb blu brn gry grn hzl oth", () => {
            const altered = validExamples.slice();
            const regex = /ecl:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['ecl:wat ', 'ecl:brown '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

    describe("pid", () => {
        it("a nine-digit number, including leading zeroes", () => {
            const altered = validExamples.slice();
            const regex = /pid:[^\s\\n]*(\s|\\n|$)?/i;
            let invalidExamples = ['pid:0123456789 ', 'pid:0000000001 '];

            altered[0] = altered[0].replace(regex, invalidExamples[0]);
            altered[1] = altered[1].replace(regex, invalidExamples[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });

});