const isValidPassport = ({
    entry
}) => {
    const spaceSeperatedData = entry.replace(/(\r?\n)+/g, ' ');
    const parts = spaceSeperatedData.split(' ');
    const fieldValuePairs = parts.map( part => {
        const data = part.split(/\s*:\s*/);
        return { field: data[0].toLowerCase(), value: data[1] };
    });

    // console.log( { fieldValuePairs } );
    
    const rules = [
        { key: 'byr', rule: (x) => { return /\d{4}/.test(x) && x >= 1920 && x <= 2002 } },
        { key: 'iyr', rule: (x) => { return /\d{4}/.test(x) && x >= 2010 && x <= 2020 } },
        { key: 'eyr', rule: (x) => { return true } },
        { key: 'hgt', rule: (x) => { return true } },
        { key: 'hcl', rule: (x) => { return true } },
        { key: 'ecl', rule: (x) => { return true } },
        { key: 'pid', rule: (x) => { return true } },
    ];
    const optionalFields = ['cid'];

    if ( fieldValuePairs.length < 7 ) {
        return false;
    }

    return fieldValuePairs.every(item => {
        const check = rules.find( rule => rule.key === item.field );
        // console.log( {item, check} );
        return item.field === 'cid' || check?.rule(item.value) || false;
    });
};

const numberOfValidPassports = ({
    input
}) => input.filter(entry => {
    return isValidPassport({
        entry
    });
});

export {
    numberOfValidPassports,
    isValidPassport
};