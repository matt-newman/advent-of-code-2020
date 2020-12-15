import should from 'should';
import {
    isValidPassport
} from './code.js';

describe("isValidPassport", () => {

    const validExamples = [
        `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f`,
        `eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`,
        `hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`,
        `iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`
    ];

    const invalidExamples = [
        `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`,
        `iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946`,
        `hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`,
        `hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`
    ];

    it("should return true for all the valid examples", () => {
        const result = validExamples.every(example => isValidPassport({
            entry: example
        }));

        result.should.equal(true);
    });

    it("should return false for all the invalid examples", () => {
        const result = validExamples.some(example => isValidPassport({
            entry: example
        }));

        result.should.equal(false);
    });

    describe("byr", () => {
        it("should be four digits; at least 1920 and at most 2002", () => {
            const altered = validExamples.slice();
            const byrRegex = /byr:[^\\s]+[\\s\n]/ig;
            let invalidBirthyears = ['byr:2003 ', 'byr:1919 '];
            
            altered[0] = altered[0].replace(byrRegex, invalidBirthyears[0]);
            altered[1] = altered[1].replace(byrRegex, invalidBirthyears[1]);

            const result = altered.filter(example => isValidPassport({
                entry: example
            }));

            result.length.should.equal(2);
        });
    });
});