const isValidPassport = ({
    entry
}) => {
    const spaceSeperatedData = entry.replace(/(\r?\n)+/g, ' ');
    const parts = spaceSeperatedData.split(' ');
    const fieldValuePairs = parts.map(part => {
        const data = part.split(/\s*:\s*/);
        
        return {
            field: data[0].toLowerCase(),
            value: data[1]
        };
    });

    // console.log( { fieldValuePairs } );

    const rules = [{
            key: 'byr',
            rule: (x) => {
                return /^\d{4}$/.test(x) && x >= 1920 && x <= 2002
            }
        },
        {
            key: 'iyr',
            rule: (x) => {
                return /^\d{4}$/.test(x) && x >= 2010 && x <= 2020
            }
        },
        {
            key: 'eyr',
            rule: (x) => {
                return /^\d{4}$/.test(x) && x >= 2020 && x <= 2030
            }
        },
        {
            key: 'hgt',
            rule: (x) => {
                let isValid = false;
                const regex = /^(\d+)(cm|in)?$/i;
                const data = x.match(regex);
                const type = data[2];
                const height = data[1];

                if (type === 'cm' && height >= 150 && height <= 193) {
                    isValid = true;
                }

                if (type === 'in' && height >= 59 && height <= 76) {
                    isValid = true;
                }

                // console.log( { data, isValid } );

                return isValid;
            }
        },
        {
            key: 'hcl',
            rule: (x) => {
                return /^#[a-f\d]{6}$/i.test(x);;
            }
        },
        {
            key: 'ecl',
            rule: (x) => {
                return /^(amb|blu|brn|gry|grn|hzl|oth)$/i.test(x);
            }
        },
        {
            key: 'pid',
            rule: (x) => {
                return /^\d{9}$/i.test(x);
            }
        },
        {
            key: 'cid',
            rule: (x) => {
                return true;
            }
        },
    ];

    const numberOfFields = fieldValuePairs.length;

    if ( numberOfFields < 7 ) {
        return false;
    }

    const includesCid = fieldValuePairs.findIndex( data => data.field === 'cid' ) !== -1;

    // console.log({fieldValuePairs, numberOfFields, includesCid});

    if ( numberOfFields === 7 && includesCid ) {
        return false;
    }

    return fieldValuePairs.every(item => {
        const check = rules.find(rule => rule.key === item.field);
        const result = check?.rule(item.value) || false;

        // if (!result) {
        //     console.log({
        //         entry,
        //         item,
        //         check
        //     });
        // }

        return result;
    });
};

const numberOfValidPassports = ({
    input
}) => {
    return input.filter(entry => {
        return isValidPassport({
            entry
        });
    }).length;
}

export {
    numberOfValidPassports,
    isValidPassport
};